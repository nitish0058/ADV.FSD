Promise.resolve().then(() => {
    console.log('Promise resolved');
}
)
function getUser(id, callback) {
    setTimeout(() => {
        console.log(`Fetching user with ID: ${id}`);
        const user = { id: 101, name: 'John Doe' };
        callback(null, user)
    }, 2000);
}
function getProfile(id, callback) {
    setTimeout(() => {
        console.log(`Fetching profile for user ID: ${id}`);
        const profile = { id: 101, bio: 'Software Developer', location: 'New York' };
        callback(null, profile);
    }, 2000);
}
function getPosts(id, callback) {
    setTimeout(() => {
        console.log(`Fetching posts for user ID: ${id}`);
        const posts = [
            { id: 1, title: 'Post 1', content: 'Content of post 1' },
            { id: 2, title: 'Post 2', content: 'Content of post 2' },
        ];
        callback(null, posts);
    }, 2000);
}
getUser(101, (err, user) => {
    if (err) {
        console.error('Error fetching user:', err);
        return;
    }   
    getProfile(user.id, (err, profile) => {
        if (err) {
            console.error('Error fetching profile:', err);
            return;
        }
        getPosts(user.id, (err, posts) => {
            if (err) {
                console.error('Error fetching posts:', err);
                return;
            }
            console.log('User:', user);
            console.log('Profile:', profile);
            console.log('Posts:', posts);
        });
    });
});


