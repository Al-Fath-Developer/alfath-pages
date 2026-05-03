export interface Faculty {
  id: string;
  name: string;
  shortName: string;
  emoji: string;
  desc: string;
  accentColor?: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  imageUrl: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  dateShort: string;
  time: string;
  location: string;
  faculty: string;
  imageUrl: string;
  isPast: boolean;
}

export interface CollabProject {
  id: string;
  title: string;
  description: string;
  faculties: string[];
  status: 'Aktif' | 'Selesai';
  imageUrl: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const faculties: Faculty[] = [
  { id: 'teknik-elektro', name: 'Fakultas Teknik Elektro', shortName: 'FTE', emoji: '⚡', desc: 'Kajian dan dakwah di lingkungan Teknik Elektro' },
  { id: 'rekayasa-industri', name: 'Fakultas Rekayasa Industri', shortName: 'FRI', emoji: '🏭', desc: 'Membangun komunitas islami di bidang industri' },
  { id: 'informatika', name: 'Fakultas Informatika', shortName: 'FIF', emoji: '💻', desc: 'Dakwah digital dan kajian di Fakultas Informatika', accentColor: '#fffb00' },
  { id: 'ekonomi-bisnis', name: 'Fakultas Ekonomi & Bisnis', shortName: 'FEB', emoji: '📊', desc: 'Kajian ekonomi Islam dan kewirausahaan halal' },
  { id: 'komunikasi-ilsos', name: 'Fakultas Komunikasi & Ilmu Sosial', shortName: 'FKIS', emoji: '🗣️', desc: 'Dakwah melalui media dan komunikasi sosial' },
  { id: 'industri-kreatif', name: 'Fakultas Industri Kreatif', shortName: 'FIK', emoji: '', desc: 'Seni dan kreativitas dalam bingkai Islam' },
  { id: 'ilmu-terapan', name: 'Fakultas Ilmu Terapan', shortName: 'FIT', emoji: '🔬', desc: 'Ilmu pengetahuan terapan berlandaskan nilai Islam' },
];

export const articles: Article[] = [
  {
    id: '1',
    title: 'Tips Produktif ala Muslim di Era Digital',
    excerpt: 'Bagaimana seorang muslim bisa memanfaatkan teknologi untuk meningkatkan produktivitas tanpa melupakan ibadah.',
    date: '28 April 2025',
    author: 'Tim Redaksi AL-FATH',
    category: 'Produktivitas',
    imageUrl: 'https://picsum.photos/seed/alfath1/600/350',
  },
  {
    id: '2',
    title: 'Refleksi Ramadhan: Momentum Perubahan Diri',
    excerpt: 'Ramadhan telah berlalu, namun semangat perubahan harus terus terjaga dalam kehidupan sehari-hari mahasiswa.',
    date: '20 April 2025',
    author: 'Divisi Keislaman',
    category: 'Keislaman',
    imageUrl: 'https://picsum.photos/seed/alfath2/600/350',
  },
  {
    id: '3',
    title: 'Ekonomi Islam: Solusi di Tengah Krisis Global',
    excerpt: 'Prinsip-prinsip ekonomi Islam terbukti memberikan ketahanan di tengah ketidakpastian ekonomi dunia.',
    date: '12 April 2025',
    author: 'LDK FEB',
    category: 'Ekonomi Islam',
    imageUrl: 'https://picsum.photos/seed/alfath3/600/350',
  },
];

export const events: Event[] = [
  {
    id: '1',
    title: 'Kajian Rutin Mingguan — Fiqh Kontemporer',
    description: 'Kajian Islam rutin membahas fiqh dan permasalahan kontemporer bersama ustadz undangan.',
    date: 'Jumat, 9 Mei 2025',
    dateShort: '9 Mei',
    time: '16.00 – 18.00 WIB',
    location: 'Masjid Telkom University',
    faculty: 'Pusat',
    imageUrl: 'https://picsum.photos/seed/event1/600/350',
    isPast: true,
  },
  {
    id: '2',
    title: 'Seminar Nasional Ekonomi Islam 2025',
    description: 'Seminar berskala nasional membahas peran ekonomi Islam dalam menghadapi tantangan global.',
    date: 'Sabtu, 17 Mei 2025',
    dateShort: '17 Mei',
    time: '08.00 – 17.00 WIB',
    location: 'Auditorium Gedung Damar, Tel-U',
    faculty: 'FEB',
    imageUrl: 'https://picsum.photos/seed/event2/600/350',
    isPast: false,
  },
  {
    id: '3',
    title: 'Training Kepengurusan LDK AL-FATH 2025',
    description: 'Pelatihan kepemimpinan dan kepengurusan bagi seluruh pengurus baru LDK AL-FATH se-Universitas Telkom.',
    date: 'Minggu, 25 Mei 2025',
    dateShort: '25 Mei',
    time: '07.00 – 17.00 WIB',
    location: 'Aula Serbaguna, Tel-U',
    faculty: 'Pusat',
    imageUrl: 'https://picsum.photos/seed/event3/600/350',
    isPast: false,
  },
  {
    id: '4',
    title: 'Workshop Dakwah Digital',
    description: 'Workshop pembuatan konten dakwah digital untuk media sosial.',
    date: 'Sabtu, 1 Juni 2025',
    dateShort: '1 Juni',
    time: '09.00 – 15.00 WIB',
    location: 'Lab Multimedia, Tel-U',
    faculty: 'FIF',
    imageUrl: 'https://picsum.photos/seed/event4/600/350',
    isPast: false,
  },
  {
    id: '5',
    title: 'Bakti Sosial Ramadhan',
    description: 'Kegiatan bakti sosial dan santunan anak yatim di bulan Ramadhan.',
    date: 'Jumat, 28 April 2025',
    dateShort: '28 Apr',
    time: '08.00 – 12.00 WIB',
    location: 'Panti Asuhan Al-Ikhlas, Bandung',
    faculty: 'Pusat',
    imageUrl: 'https://picsum.photos/seed/event5/600/350',
    isPast: true,
  },
];

export const collabProjects: CollabProject[] = [
  {
    id: '1',
    title: 'Gebyar Ramadhan 1446H',
    description: 'Rangkaian program Ramadhan lintas fakultas: bazar, kajian, dan santunan anak yatim bersama.',
    faculties: ['Pusat', 'FIF', 'FEB', 'FKIS'],
    status: 'Aktif',
    imageUrl: 'https://picsum.photos/seed/collab1/600/350',
  },
  {
    id: '2',
    title: 'Digital Dakwah — Konten Islam di Sosmed',
    description: 'Kolaborasi produksi konten dakwah digital yang kreatif dan informatif untuk Instagram & YouTube.',
    faculties: ['FIK', 'FKIS', 'FIF'],
    status: 'Aktif',
    imageUrl: 'https://picsum.photos/seed/collab2/600/350',
  },
  {
    id: '3',
    title: 'Beasiswa & Sosial — Mahasiswa Berprestasi',
    description: 'Program beasiswa dan pendampingan mahasiswa berprestasi dari keluarga kurang mampu.',
    faculties: ['Pusat', 'FRI', 'FTE', 'FIT'],
    status: 'Aktif',
    imageUrl: 'https://picsum.photos/seed/collab3/600/350',
  },
];

export const faqItems: FAQItem[] = [
  {
    question: 'Apa itu LDK AL-FATH?',
    answer: 'LDK AL-FATH adalah Lembaga Dakwah Kampus yang bergerak di lingkungan Universitas Telkom. Kami hadir untuk membina mahasiswa muslim yang berakhlak, berwawasan luas, dan berdampak nyata bagi masyarakat melalui program kajian, sosial, dan pengembangan diri.',
  },
  {
    question: 'Bagaimana cara bergabung dengan AL-FATH?',
    answer: 'Kamu bisa bergabung dengan mendaftar melalui halaman rekrutmen kami yang dibuka setiap awal semester. Ikuti open recruitment, ikuti seleksi, dan setelah diterima kamu akan mengikuti masa orientasi dan pembinaan kader.',
  },
  {
    question: 'Apakah AL-FATH terbuka untuk semua fakultas?',
    answer: 'Ya, AL-FATH memiliki unit di 7 fakultas Universitas Telkom. Setiap mahasiswa muslim dari fakultas manapun bisa bergabung dengan unit fakultas masing-masing atau berpartisipasi dalam program lintas fakultas.',
  },
  {
    question: 'Apa saja program kegiatan AL-FATH?',
    answer: 'Program kami meliputi kajian rutin, mentoring keislaman, mutabaah yaumiyah, program kerja fakultas, event sosial, seminar, training kepemimpinan, dan berbagai kegiatan dakwah lainnya yang dirancang untuk pembinaan kader.',
  },
  {
    question: 'Bagaimana sistem mentoring di AL-FATH?',
    answer: 'Sistem mentoring kami menghubungkan mentor berpengalaman dengan mentee dalam kelompok kecil. Mentoring mencakup pembinaan akhlak, pemahaman Islam, pengembangan diri, dan pendampingan akademik yang dilakukan secara rutin.',
  },
];
