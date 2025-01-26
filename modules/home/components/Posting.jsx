import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, Dimensions } from 'react-native';

export default function Posting({ post }) {
  return (
    <View style={styles.post}>
      {/* Header del Post */}
      <View style={styles.postHeader}>
        <Image source={{ uri: post.userImage }} style={styles.userImage} />
        <Text style={styles.userName}>{post.userName}</Text>
      </View>

      {/* Imagen principal */}
      <Image source={{ uri: post.postImage }} style={styles.postImage} />

      {/* Descripción y acciones */}
      <View style={styles.postBody}>
        <Text style={styles.caption}>{post.caption}</Text>
        <Text style={styles.likes}>{post.likes} me gusta</Text>
      </View>

      {/* Comentarios */}
      <FlatList
        data={post.comments}
        renderItem={({ item }) => (
          <View style={styles.comment}>
            <Text style={styles.commentUser}>{item.userName}:</Text>
            <Text style={styles.commentText}>{item.comment}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        style={styles.commentsList}
      />
    </View>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  post: {
    marginBottom: 20,
    backgroundColor: '#1E1E1E', // Fondo oscuro
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
    marginHorizontal: 10,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#333', // Línea sutil
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#FFF', // Texto claro
  },
  postImage: {
    width: width - 20, // Adaptado al margen del componente
    height: width - 20,
    alignSelf: 'center',
    borderRadius: 12,
  },
  postBody: {
    padding: 10,
  },
  caption: {
    fontSize: 14,
    color: '#BBB', // Gris claro para el texto
    marginBottom: 8,
  },
  likes: {
    fontSize: 14,
    color: '#888', // Gris intermedio para menos énfasis
  },
  commentsList: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  commentUser: {
    fontWeight: 'bold',
    fontSize: 14,
    marginRight: 5,
    color: '#FFF',
  },
  commentText: {
    fontSize: 14,
    color: '#BBB',
  },
});
