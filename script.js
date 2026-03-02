import {createClient} from 'https://cdn.skypack.dev/@supabase/supabase-js';

const supabaseURL = 'https://uqleuyqswudzewzdrkgs.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVxbGV1eXFzd3VkemV3emRya2dzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI0NTU1NTUsImV4cCI6MjA4ODAzMTU1NX0.w680YblnxkAA4cTFVHq3JXqkNp6QcqXIyZ3TT1EujMw'
const supabase = createClient(supabaseURL, supabaseKey);


const tbody = document.getElementById('books');
let {data:books, error} = await supabase
    .from('books')
    .select('*');

if (error) {
    console.error('Error fetching books:', error);
} else {
    books.forEach(book => {
        const row = document.createElement('tr');

    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>`;
    tbody.appendChild(row);
});
}