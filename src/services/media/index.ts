import { v2 as cloudinary } from "cloudinary";
import * as fs from "fs/promises";

class MediaService {
  async uploadFiles(files: any) {
    try {
      const uploadedFiles: string[] = [];
      for (const file of files) {
        const response = await cloudinary.uploader.upload(file.path);
        uploadedFiles.push(response.secure_url);
        await fs.unlink(file.path);
      }
      return uploadedFiles;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}

export default new MediaService();
