const NavMenu = () => {
  const openMenu = () => {
    const menu = document.getElementById('menu')
    const bars = document.getElementById('bars')
    menu?.classList.toggle('hidden')
    bars?.classList.toggle('active')
  }
  return (
    <button
      id='bars'
      className='fixed right-8 top-16 block lg:hidden'
      onClick={openMenu}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  )
}

export default NavMenu
