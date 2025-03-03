import { z } from "zod"

export const CreateModuleSchema = z.object({
  title: z.string().min(1, {
    message: "Judul harus diisi"
  }),
  subjects: z.string().min(1, {
    message: "Mata pelajaran harus diisi"
  }),
  subjects_matter: z.string().min(1, {
    message: "Bab utama pelajaran harus diisi"
  }),
  learning_model: z.string().min(1, {
    message: "Model pembelajaran harus diisi"
  }),
  curriculum: z.string().min(1, {
    message: "Kurikulum pembelajaran harus diisi"
  }),
  year: z.string().min(1, {
    message: "Tahun pelajaran harus diisi"
  }),
  class: z.string().min(1, {
    message: "Kelas harus diisi"
  }),
  lesson_meet: z.number().min(1, {
    message: "Jumlah pertemuan harus diisi"
  }),
  lesson_time: z.number().min(1, {
    message: "Jumlah jam bembelajaran harus diisi"
  }),
  lesson_hour: z.number().min(1, {
    message: "Lama jam pembelajaran harus diisi"
  }),
})

export const GetOneModuleSchema = z.object({
  id: z.string()
})