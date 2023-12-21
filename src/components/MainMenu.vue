<template>
      <div class="menu-card">
            <div class="menu">
                  <button class="menu-button"><router-link to="/cadastrar">Cadastrar Novo Projeto</router-link></button>
                  <button class="menu-button"><router-link to="/projetos">Projetos</router-link></button>
                  <button class="menu-button">Executar</button>
            </div>
      </div>
</template>

<script>
      export default {
            name: 'MainMenu'
      }
</script>

<style>

/* Definições gerais */
.menu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.menu-button {
  width: 100%;
  height: 50px;
  margin-top: 5px;
  margin-bottom   : 5px;
  background-color: #f1f1f1;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
}

.menu-button:hover {
  background-color: #ccc;
}

.menu-card {
  width: 200px;
  height: 200px;
  background-color: #fff;
  border-radius: 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>