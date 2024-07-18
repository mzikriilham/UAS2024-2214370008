// Contoh data artikel (biasanya diambil dari server atau database)
var articles = [
    { id: 1, title: 'Judul Artikel Pertama', category: 'Politik', tags: ['Pemerintahan', 'Pemilu'], content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 2, title: 'Judul Artikel Kedua', category: 'Ekonomi', tags: ['Investasi', 'Pasar Saham'], content: 'Integer nec odio. Praesent libero.' },
    { id: 3, title: 'Judul Artikel Ketiga', category: 'Teknologi', tags: ['Internet', 'Keamanan'], content: 'Sed nisi. Nulla quis sem at nibh elementum imperdiet.' }
];

// Menampilkan artikel di dalam main-content
var mainContent = document.querySelector('.main-content .container');
articles.forEach(function(article) {
    var articleHTML = `
        <div class="article">
            <h2>${article.title}</h2>
            <p>${article.content}</p>
            <a href="#" class="read-more">Baca Selengkapnya</a>
        </div>
    `;
    mainContent.innerHTML += articleHTML;
});

// Implementasi lebih lanjut (database, form, dll.) bisa dilakukan di sini
