import Logo from './Logo';
import Container from './Container';
const Header = () => {
  return( 
    <header className="bg-white shadow-md sticky top-0 z-50"> 
      {/*logo*/}
     <Container className="py-4"> 
       <Logo />
     </Container>
      {/*navber*/}
      <div></div>
    </header>
    )
}
export default Header;