import { type z } from "zod";
import { type CreateModuleSchema } from "../server/validator/module";

type GeneratePromptProps = z.infer<typeof CreateModuleSchema>;

export const GeneratePrompt = (input: GeneratePromptProps) => {
  const time_allocation =
    input.lesson_meet * input.lesson_hour * input.lesson_time;

  return {
    prompt1: `Identitas modul dibagi menjadi 6 bagian yaitu:
1. identitas modul, berisi mata pelajaran ${input.subjects}, materi pokok ${input.subjects_matter}, tahun pelajaran ${input.year}, jenjang sekolah ${input.class}, moda luring. 
2. kompetensi awal, yaitu kompetensi yang diperlukan sebelum mempelajari materi.
3. profile pemuda pancasila yang berisi profil pemuda pancasila Indonesia.
4. sarana dan prasarana, yang berisi hal hal yang dibutuhkan dalam proses pembelajaran.
5. target peserta didik, yaitu apa yang diharapkan dari peserta didik setelah mempelajari materi tersebut.
6. Model pembelajaran, yaitu dengan menggunakan ${input.learning_model}`,
    prompt2: `Komponen inti modul dibagi menjadi 5 bagian yaitu:
1. Tujuan pembelajaran, tujuan dari dilaksanakannya pembelajaran ini dan hasil akhir yang akan dicapai
2. Pemahaman bermakna, sebuah kalimat yang memiliki makna tentang pembelajaran yang akan dilakukan
3. pertanyaan pemantik, daftar pertanyaan yang dapat memantik pemahaman peserta didik tentang materi yang akan dipelajari minimal 3
4. kegiatan pembelajaran, berisi inti dari pembelajaran yang akan dilakukan, kegiatan pembelajaran memiliki kriteria sebagai berikut:
   - berbentuk sebuah tabel dengan 3 kolom, yaitu kegiatan, langkah-langkah pembelajaran, dan alokasi waktu dengan total waktu ${time_allocation}.
   - pada kolom kegiatan terdapat 3 jenis, yaitu pembuka, inti, dan penutup
   - pada kegiatan pendahuluan berisikan kegiatan sebelum pelajaran dimulai.
   - pada kegiatan inti berisi daftar kegiatan selama pembelajaran berlangsung sesuai dengan model pembelajaran yang dipakai yaitu ${input.learning_model}
   - pada kegiatan penutup berisikan kegiatan untuk menutup pembelajaran seperti, guru menyuruh peserta didik untuk menyampaikan kesimpulan, 
     memberikan penguatan/umpan balik ke seperta didik, guru menyampaikan rencana kegiatan pertemuan selanjutnya, dan guru menutup dengan salam
5. Refleksi, berisi daftar pertanyaan untuk refleksi pembemlajaran yang dilakukan seperti apakah peserta didik sudah menguasai materi? berikan minimal 
   5 pertanyaan refleksi.`,
    prompt3: `Assesmen, berisi rencana bagaimana akan dilakukan pengambilan nilai. Assesment dibagi menjadi 3 bagian yaitu :
1. Assesment formatif (penilaian sikap), berupa tabel penilaian sikap peserta didik ketika berdiskusi. berikan lembar penilaian dan rubrik penilaiannya
2. Assesment formatif (penilaian keterampilan), berupa tes keterampilan tentang materi yang dipelajari. berikan soal dan ribrik penilaian
3. Assesment sumatif ( penilaian pengetahuan), berupa tes dalam bentuk pilihan ganda dengan 20 soal, masing-masing soal memiliki 5 pilihan jawaban. 
   Berikan tabel kisi-kisi, soal, kunci jawaban, dan rubrik penilaian.`,
    prompt4: `Buatkan sebuah materi lengkap tentang ${input.subjects_matter}`,
  };
};
