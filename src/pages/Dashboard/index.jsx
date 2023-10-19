export const Dashboard = ({ user, userLogout }) => {
  console.log(user);
  return (
    <main>
      {/* não sei se é p ou se vai no header isso a baixo e provavelmente não vai no main, não consegui encostar nessa página direito 
      
      OBS: o userLogout vai precisar ser mandando pro header caso o botão de sair vá no header ou caso ele fique aqui é só passar pro botão*/}
      <p>{user?.name}</p>
      <p>{user?.course_module}</p>
    </main>
  );
};
