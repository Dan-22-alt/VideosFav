import { Router } from 'express'
import * as videoCtrl from './Videos-controller'

const router = Router();

router.get('/videos', videoCtrl.gettingVideos);

router.get('/videos/:id', videoCtrl.getVideo);

router.post('/videos', videoCtrl.createVideo); 

router.delete('/videos/:id', videoCtrl.deleteVideo);

router.put('/videos/:id', videoCtrl.updateVideo);

export default router;