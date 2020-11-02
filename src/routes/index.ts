import express from 'express';

const router = express.Router();

export const Router = () => {
  router.get('/', (_req, res) => {
    res.send('Home');
  });

  return router;
};
