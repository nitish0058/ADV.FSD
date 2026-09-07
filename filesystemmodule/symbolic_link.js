import fs from 'fs';
fs.symlink('notes.txt', 'notes_link.txt',"dir", (err) => {
    if (err) {
        console.error('Error creating symbolic link:', err);
    } else {
        console.log('Symbolic link created successfully.');
    }
});
