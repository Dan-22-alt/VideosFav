import { RequestHandler } from 'express'
import Video from './Video'

export const gettingVideos: RequestHandler = async (req, res) => {
    try {
        const videos = await Video.find()
        return res.json(videos)
    } catch (error) {
        res.json(error)
    }
}

export const createVideo: RequestHandler = async (req, res) => {
    const videoFound = await Video.findOne({url: req.body.url})
    if(videoFound)
        return res.status(301).json({message: "La URL ya fue ingresada"})

    const video = new Video(req.body)
    const savedVideo = await video.save()
    res.json(savedVideo)
}

export const getVideo: RequestHandler = async (req, res) => {
    const videoFound = await Video.findById(req.params.id)
    if(!videoFound) return res.status(204).json()
    return res.json(videoFound)
}

export const deleteVideo: RequestHandler = async (req, res) => {
    const videoFound = await Video.findByIdAndDelete(req.params.id)
    if(!videoFound) return res.status(204).json()
    return res.json(videoFound)
}

export const updateVideo: RequestHandler = async (req, res) => {
    const videoAct = await Video.findByIdAndUpdate(req.params.id, req.body, {new: true})
    if(!videoAct) return res.status(204).json()
    res.json(videoAct)
}