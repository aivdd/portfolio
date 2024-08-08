const ProjectData = () => {
  const projects = [
    {
      judul: 'Sistem Informasi Monitoring Penelitian',
      desc: 'Sistem Informasi untuk memonitoring penelitian yang dilakukan oleh dosen di Universitas Telkom. Memiliki 2 Role yaitu admin untuk memantau penelitian dan dosen untuk membuat, melihat, memperbarui, dan menghapus penelitian yang sedang dilaksanakan.',
      url_demo: 'https://pui-pt.42web.io/',
      url_github: 'https://github.com/aivdd/PUI-PT_Intelligent-Sensing-IoT',
      date: 'April - Juni 2024',
      tools: ['Laravel', 'MySQL'],
      library: ['Bootstrap', 'Data Tables', 'chart.js'],
      image: './image-sistem-informasi-monitoring-penelitian.jpg',

      roles: [
        {
          name: 'Admin',
          username: 'admin@example.com',
          password: 'admin',
        },
        {
          name: 'Dosen',
          username: 'dosen@example.com',
          password: 'dosen',
        },
      ],
    },
    {
      judul: 'Sistem Penjualan',
      desc: 'Sistem ini digunakan oleh Pondok Pesantren Al-Idrus untuk mendukung proses penjualan pada koperasi mereka. Memiliki 2 Role yaitu Kepala Koperasi untuk CRUD produk, mengelola user serta melihat penjualan sementara Kasir untuk melayani penjualan dengan pembeli. Sistem ini menggunakan kartu RFID untuk mengidentifikasi pembeli dengan sebutan member.',
      url_demo: 'https://izi-cashier.is-best.net/',
      url_github: 'https://github.com/MrcSatrio/Sistem-Kasir-AL_IDRUS',
      date: 'Agustus - September 2023',
      tools: ['CodeIgniter 4', 'MySQL'],
      library: ['Bootstrap', 'Data Tables', 'chart.js', 'jQuery'],
      image: './image-sistem-penjualan-koperasi.jpg',
      roles: [
        {
          name: 'Kepala Koperasi',
          username: 'koperasi',
          password: '123',
        },
        {
          name: 'Kasir',
          username: 'kasir',
          password: '123',
        },
      ],
    },
    {
      judul: 'Sistem Parkir',
      desc: 'Sistem ini digunakan untuk mengidentifikasi user menggunakan kartu RFID di Universitas Bina Insani. Kartu tersebut berisi informasi saldo yang dapat ditambah dan berkurang ketika user keluar parkir. Sistem ini terdiri dari 4 Role: Admin dapat mengelola semua sumber daya sistem, Keuangan dapat mengisikan saldo user, Operator bertugas mengidentifikasi RFID user untuk mengurangi saldo, dan User sebagai pengguna parkir.',
      url_demo: 'https://izi-cashier.is-best.net/',
      url_github: '',
      date: 'Mei - Juni 2023',
      tools: ['CodeIgniter 4', 'MySQL'],
      library: ['Bootstrap', 'Data Tables', 'chart.js', 'jQuery'],
      image: './image-sistem-parkir-biu.jpg',
      roles: [
        {
          name: 'Admin',
          username: '1',
          password: 'Admin123',
        },
        {
          name: 'Keuangan',
          username: '',
          password: '',
        },
        {
          name: 'Operator',
          username: '3',
          password: '123',
        },
        {
          name: 'User',
          username: '4',
          password: 'User1234',
        },
      ],
    },
  ];

  return projects;
};

export default ProjectData;
