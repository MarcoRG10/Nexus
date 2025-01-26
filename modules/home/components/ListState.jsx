import React, { useState } from 'react';
import { FlatList } from 'react-native';
import State from './State.jsx';


  export default function ListStates ()  {
    const [estados, setEstados] = useState([
      {id:1, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStihKLR4QsliwDXi8x2pJx20dW0zfRKVAiaA&s', seen: true },
      {id:2, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQElbaePMJA_KW3V1R32-_UqA4YxC6TuYpxlg&s', seen: true },
      {id:3, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBioLvC31VJfcfkE4hfU05iLTNfE5o6oFKgA&s', seen: true },
      {id:4, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpj2elRrHLpPcNjxMfFdLA9zSoxiCbivEvHQ&s', seen: true },
      {id:5, image: 'https://i0.wp.com/www.otero.uy/wp-content/uploads/2023/03/fotos-para-perfil-de-linkedin-hombre-2.jpg?fit=1080%2C1080&ssl=1', seen: true },
      {id:6, image: 'https://media.glamour.mx/photos/65b092a43756393e0200c63b/master/w_1600%2Cc_limit/foto-de-perfil-artistica.jpg', seen: true },
      {id:7, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREsFljbBIY4oH82Qb6WwOsA9vRO-Pcon2Uog&s', seen: true },
      // ... más estados
    ]);
    const handleStatePress = (image) => {
      console.log('Estado presionado', image);
    }
  
    return (
      <FlatList
        data={estados}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <State image={item.image} seen={item.seen} onPress={()=> handleStatePress(item.image)}/>}
        keyExtractor={(item) => item.id}
      />
      
    );
  };
  







{
  /*
  const images = [
    require("../../../assets/cat-7779237_640.jpg"),
    require("../../../assets/bird-8336436_640.jpg"),
    require("../../../assets/dog-9190504_640.jpg"),
    require("../../../assets/flycatcher-8864922_640.jpg"),
    require("../../../assets/grey-wolf-8492789_640.png"),
    require("../../../assets/sea-8445435_640.jpg"),
    require("../../../assets/whisky-8443153_640.jpg"),
  ];

  */
}
