import React, { useState, useEffect } from 'react'
import './GlobalPost.css'
import { useNavigate } from 'react-router-dom';

function GlobalPost() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Carrega posts do localStorage quando o componente monta
    const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    setPosts(savedPosts);
  }, []);

  const telacriaPost = () => {
    navigate('/telapostagem');
  };

  const handleLike = (postId) => {
    const updatedPosts = posts.map(post => {
      if (post.id === postId) {
        return { ...post, likes: post.likes + 1 };
      }
      return post;
    });
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  };
  return (
    <div className='body-globalpost'>

      <div className='navbar-globalpost'>

          <div className='logo-globalpost' ><h2 className='h2-da-logo-globalpost' >GlobalPost</h2></div>

                <div className='conteine-vazio-navbar' ></div>

                <div className='conteine-icoUser-navnar-globalpost' > <img src="icone-usuario.png" alt=""  className='icoUser-navnar-globalpos' /></div>
      </div>

  {/* é só um imput com um texto ao lado do button */}
      <div className='div-do-button-globalpost'>
            <div className='div-do-butao-postagem-globalpost' ><button onClick={telacriaPost} className='butao-postagem-globalpost' >Faça uma nova postagem</button> </div>
            <div className='div-butao-MAIS-globalpost' ><button onClick={telacriaPost} className='butao-MAIS-globalpost'>+</button></div>
      </div>

      <div className='div-das-postagens-globalpost'>
       {posts.length > 0 ? (
          posts.map(post => (
            <div className='conteine-de-uma-postagem-globalpost' key={post.id}>
              <div className='containe-do-nome-foto-globalpost'>
                <div className='conteine-da-foto-globalpost'>
                  <img src={post.userImage} alt="" className='icone-usuario-globalpost' />
                </div>  
                <div className='conteine-do-nome-globalpost'>
                  <h1 className='nome-teste-globalpost'>{post.username}</h1>
                </div>
                <div className='conteine-vazia-globalpost'></div>
                <div className='conteine-tresPontos-globalpost'>
                  <img src="icone-menu-trespont.png" alt="" className='icone-menu-trespont' />
                </div>
              </div>

              <div className='conteine-DA-postagem-globalpost'>
                <img 
                  src={post.imageUrl} 
                  alt="Post" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <div className='caption-container'>
                <p>{post.caption}</p>
              </div>

              <div className='conteine-icones-globalpost'>
                <div 
                  className='conteine-doicone-curtida-globalpost'
                  onClick={() => handleLike(post.id)}
                >
                  <img src="icone-curtida.png" alt="" className='icone-curtida' />
                  <span>{post.likes}</span>
                </div>
                <div className='conteine-doicone-comentar-globalpost'>
                  <img className='icone-coment' src="icone-coment.png" alt="" />
                </div>
                <div className='icone-conteine-vazia-globalpost'></div>
              </div>
            </div>
          ))
        ) : (
          <div className='no-posts-message'>
            <p>Nenhuma postagem ainda. Seja o primeiro a postar!</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default GlobalPost