import React, { useState, useRef } from 'react';
import './PerfilDePostagem.css';

function PerfilDePostagem() {
  const [user, setUser] = useState({
    name: 'Nome do Usuário',
    email: 'usuario@exemplo.com',
    profileImage: null,
    previewImage: null,
    followers: 245,
    following: 178,
    posts: 32
  });
  
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUser({
          ...user,
          profileImage: file,
          previewImage: reader.result
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className='div-q-inglobaTudo-PerfPostagem'>
          <div className='Navbar-PerfPostagem'>

            <img src="Arrow.png" alt="" className='arrow-PerfPostagem' />

          </div>

            <div className='Conteine-foto-nomeUser-PerfPostagem'>
              <div className='conteine-da-fotoPerfil-PerfPostagem'>
                    <div 
                      className='fotoPerfil-PerfPostagem'
                      onClick={handleUploadClick}
                      style={user.previewImage ? { 
                        backgroundImage: `url(${user.previewImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      } : {}}
                    >
                      {!user.previewImage && (
                        <span style={{ fontSize: '40px', color: '#fff' }}>
                          {user.name.charAt(0)}
                        </span>
                      )}
                    </div>
                
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageChange}
                  accept="image/*"
                  style={{ display: 'none' }}
                />
              </div>

              <div className='n°-seguidores-seguindo-PerfPostagem'>
                    <div className='stat-item'>
                      <div className='stat-number'>{user.posts}</div>
                      <div className='stat-label'>Publicações</div>
                    </div>

                    <div className='stat-item'>
                      <div className='stat-number'>{user.followers}</div>
                      <div className='stat-label'>Seguidores</div>
                    </div>

                    <div className='stat-item'>
                      <div className='stat-number'>{user.following}</div>
                      <div className='stat-label'>Seguindo</div>
                    </div>
              </div>

              <div className='texto-dos-numeros-PerfPostagem'>
                <h2>{user.name}</h2>
                <p>@{user.name.replace(/\s+/g, '').toLowerCase()}</p>
              </div>

           </div>

              <div className='conteine-da-postagens-PerfPostagem'>

                  <div className='conteine-texto-publicaçoes-PerfPostagem'>
                    <h3>Publicações</h3>
                  </div>

                  <div className='conteine-das-publicaçoes'>
                    {/* Aqui viriam as postagens do usuário */}
                    <p style={{ textAlign: 'center', padding: '20px' }}>
                      Nenhuma publicação ainda
                    </p>
                  </div>

              </div>
    </div>
  );
}

export default PerfilDePostagem;