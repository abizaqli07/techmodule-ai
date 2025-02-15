import { type z } from "zod";
import { type CreateModuleSchema } from "../server/validator/module";

type GeneratePromptProps = z.infer<typeof CreateModuleSchema>;

export const GeneratePrompt = (input: GeneratePromptProps) => {
  const time_allocation =
    input.lesson_meet * input.lesson_hour * input.lesson_time;

  return {
    prompt1: `
    Modul pembelajaran dibagi menjadi 4 bagian, yaitu identitas modul, komponen inti, assesment, dan materi.
    Modul yang akan dibuat kali ini berisi materi tentang ${input.subjects} dengan pokok bahasan ${input.subjects_matter}. Modul ini harus
    mengikuti tata cara pembelajaran dengan kurikulum ${input.curriculum} untuk kelas ${input.class}. Pembelajaran dilaksanakan dengan model ${input.learning_model}.

    Buatlah bagian pertama dari modul ini yaitu Identitas modul dengan mengikuti rincian berikut :
    Identitas modul dibagi menjadi 6 bagian yaitu:
      1. identitas modul, berisi mata pelajaran ${input.subjects}, materi pokok ${input.subjects_matter}, tahun pelajaran ${input.year}, jenjang sekolah ${input.class}, moda luring. 
      2. kompetensi awal, yaitu kompetensi yang diperlukan sebelum mempelajari materi.
      3. profile pemuda pancasila yang berisi profil pemuda pancasila Indonesia.
      4. sarana dan prasarana, yang berisi hal hal yang dibutuhkan dalam proses pembelajaran.
      5. target peserta didik, yaitu apa yang diharapkan dari peserta didik setelah mempelajari materi tersebut.
      6. Model pembelajaran, yaitu dengan menggunakan ${input.learning_model}
      
      `,
    prompt2: `
    Modul pembelajaran dibagi menjadi 4 bagian, yaitu identitas modul, komponen inti, assesment, dan materi.
    Modul yang akan dibuat kali ini berisi materi tentang ${input.subjects} dengan pokok bahasan ${input.subjects_matter}. Modul ini harus
    mengikuti tata cara pembelajaran dengan kurikulum ${input.curriculum} untuk kelas ${input.class}. Pembelajaran dilaksanakan dengan model ${input.learning_model}.

    Buatlah bagian kedua dari modul ini yaitu komponen inti dengan mengikuti rincian berikut :
    Komponen inti modul dibagi menjadi 5 bagian yaitu:
      1. Tujuan pembelajaran, tujuan dari dilaksanakannya pembelajaran ini dan hasil akhir yang akan dicapai
      2. Pemahaman bermakna, sebuah kalimat yang memiliki makna tentang pembelajaran yang akan dilakukan
      3. pertanyaan pemantik, daftar pertanyaan yang dapat memantik pemahaman peserta didik tentang materi yang akan dipelajari minimal 3
      4. kegiatan pembelajaran, berisi inti dari pembelajaran yang akan dilakukan, kegiatan pembelajaran memiliki kriteria sebagai berikut:
        - menggunakan kurikulum yaitu ${input.curriculum}
        - berbentuk sebuah tabel dengan 3 kolom, yaitu kegiatan, langkah-langkah pembelajaran, dan alokasi waktu dengan total waktu ${time_allocation}.
        - pada kolom kegiatan terdapat 3 jenis, yaitu pembuka, inti, dan penutup
        - pada kegiatan pendahuluan berisikan kegiatan sebelum pelajaran dimulai.
        - pada kegiatan inti berisi daftar kegiatan selama pembelajaran berlangsung sesuai dengan model pembelajaran yang dipakai yaitu ${input.learning_model}
        - pada kegiatan penutup berisikan kegiatan untuk menutup pembelajaran seperti, guru menyuruh peserta didik untuk menyampaikan kesimpulan, 
          memberikan penguatan/umpan balik ke seperta didik, guru menyampaikan rencana kegiatan pertemuan selanjutnya, dan guru menutup dengan salam
      5. Refleksi, berisi daftar pertanyaan untuk refleksi pembemlajaran yang dilakukan seperti apakah peserta didik sudah menguasai materi? berikan minimal 
        5 pertanyaan refleksi.
    
        `,
    prompt3: `
    Modul pembelajaran dibagi menjadi 4 bagian, yaitu identitas modul, komponen inti, assesment, dan materi.
    Modul yang akan dibuat kali ini berisi materi tentang ${input.subjects} dengan pokok bahasan ${input.subjects_matter}. Modul ini harus
    mengikuti tata cara pembelajaran dengan kurikulum ${input.curriculum} untuk kelas ${input.class}. Pembelajaran dilaksanakan dengan model ${input.learning_model}.

    Buatlah bagian ketiga dari modul ini yaitu Assesment dengan mengikuti rincian berikut :
    Assesmen, berisi rencana bagaimana akan dilakukan pengambilan nilai. Assesment dibagi menjadi 3 bagian yaitu :
      1. Assesment formatif (penilaian sikap), berupa tabel penilaian sikap peserta didik ketika berdiskusi. berikan lembar penilaian dan rubrik penilaiannya secara lengkap
      2. Assesment formatif (penilaian keterampilan), berupa tes keterampilan tentang materi yang dipelajari. berikan soal dan ribrik penilaian secara lengkap
      3. Assesment sumatif ( penilaian pengetahuan), berupa tes dalam bentuk pilihan ganda minimal 20 soal, masing-masing soal memiliki 5 pilihan jawaban secara lengkap.
        Berikan tabel kisi-kisi, soal, kunci jawaban, dan rubrik penilaian.
  
  `,
    prompt4: `
    Modul pembelajaran dibagi menjadi 4 bagian, yaitu identitas modul, komponen inti, assesment, dan materi.
    Modul yang akan dibuat kali ini berisi materi tentang ${input.subjects} dengan pokok bahasan ${input.subjects_matter}. Modul ini harus
    mengikuti tata cara pembelajaran dengan kurikulum ${input.curriculum} untuk kelas ${input.class}. Pembelajaran dilaksanakan dengan model ${input.learning_model}.

    Buatlah bagian keempat dari modul ini yaitu Materi dengan mengikuti rincian berikut :
    Buatkan sebuah materi lengkap tentang materi berikut ${input.subjects} dengan pokok bahasan ${input.subjects_matter}
    
    `,
  };
};
