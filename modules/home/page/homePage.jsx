import { ScrollView, View } from "react-native";
import HeaderHome from "../components/HeaderHome.jsx";
import ListState from "../components/ListState.jsx";
import Posting from "../components/Posting.jsx";

const post = [
  {
    id: 1,
    userId: 1,
    userName: 'johnDoe',
    userImage: 'https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=2523',
    postImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_mScsUcojfoiX4zbCaUQqOvuuw2G7BazrNQ&s",
    caption: '¡Mi nuevo gatito es lo más tierno del mundo!  #gatos #mascotas #adorables',
    location: 'Mi hogar',
    hashtags: ['gatos', 'mascotas', 'adorables'],
    createdAt: '2023-11-22T10:30:00Z',
    likes: 100,
    comments: [
      {
        id: 1,
        userId: 2,
        userName: 'janeDoe',
        comment: '¡Qué monada!  ¿De qué raza es?',
        createdAt: '2023-11-22T11:00:00Z',
      },
    ],
  },
  {
    id: 2,
    userId: 2,
    userName: 'janeDoe',
    userImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D',
    postImage: 'https://live.staticflickr.com/5547/10766425006_f9abd5f2f5_b.jpg',
    caption: 'Disfrutando de este atardecer en la playa  ¿Quién se apunta a un chapuzón?',
    location: 'Playa de la Concha',
    hashtags: ['atardecer', 'playa', 'verano'],
    mentions: ['@johnDoe'],
    createdAt: '2023-11-23T08:15:00Z',
    likes: 150,
    comments: [
      {
        id: 1,
        userId: 1,
        userName: 'johnDoe',
        comment: '¡Quiero ir contigo! ️',
        createdAt: '2023-11-23T08:30:00Z',
      },
    ],
  },
];

export default function homePage() {  
  return (
    <View >
      <ScrollView>
        <HeaderHome />
        <ListState />
        {post.map((post) => (
          <Posting key={post.id} post={post} nestedScrollEnabled={true} />
        ))}
      </ScrollView>
    </View>
  );
}
