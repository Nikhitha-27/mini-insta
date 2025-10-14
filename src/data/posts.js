export const seedPosts = [
  {
    id: crypto.randomUUID(),
    author: "alice",
    avatar: "https://i.pravatar.cc/80?u=alice",
    imageUrl: "https://picsum.photos/id/1015/800/600",
    alt: "sunny river valley landscape",
    caption: "Weekend hike 🌲",
    likedByMe: false,
    likeCount: 12,
    comments: [
      { id: crypto.randomUUID(), author: "bob", text: "Nice shot!" }
    ],
  },
  {
    id: crypto.randomUUID(),
    author: "bob",
    avatar: "https://i.pravatar.cc/80?u=bob",
    imageUrl: "https://picsum.photos/id/1025/800/600",
    alt: "dog portrait close-up",
    caption: "My coworker during standups 🐶",
    likedByMe: true,
    likeCount: 34,
    comments: [],
  },
  {
    id: crypto.randomUUID(),
    author: "charlie",
    avatar: "https://i.pravatar.cc/80?u=charlie",
    imageUrl: "https://picsum.photos/id/1003/800/600",
    alt: "city skyline at dusk",
    caption: "Golden hour hits different ✨",
    likedByMe: false,
    likeCount: 5,
    comments: [],
  },
];
