// Nesse arquivo ficará toda a configuração do envio de arquivos
import multer from 'multer';
import crypto from 'crypto';
import { extname, resolve } from 'path';

export default {
  storage: multer.diskStorage({
    // Destino dos arquivos onde serão arquivados
    destination: resolve(__dirname, '..', '..', 'tmp', 'uploads'),
    // como vamos formatar o arquivo do nome da imagem
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, res) => {
        if (err) return cb(err);

        return cb(null, res.toString('hex') + extname(file.originalname));
      });
    },
  }),
};
