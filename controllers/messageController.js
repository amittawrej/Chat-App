import { Conversation } from "../models/conversationModel.js";
import { Message } from "../models/messageModel.js";

export const sendMessage = async (req, res) => {
  try {
    const senderId = req.id;
    // console.log(req.params.id);
    const receiverId = req.params.id;
    const { message } = req.body;

    let gotCoversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });
    if (!gotCoversation) {
      gotCoversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }
    const newMessage = await Message.create({
      senderId,
      receiverId,
      message,
    });
    if (newMessage) {
      gotCoversation.messages.push(newMessage._id);
    }
    await gotCoversation.save();

    return res.status(201).json({ newMessage });
  } catch (error) {
    console.log(error);
  }
};

export const getMessage = async (req, res) => {
  try {
    const receiverId = req.params.id;
    const senderId = req.id;
    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    }).populate("messages");
    // console.log(coversation);
    return res.status(200).json(conversation?.messages);
  } catch (error) {
    console.log(error);
  }
};
