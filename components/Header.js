import Menu from '@components/Menu'

export default function Header({ title }) {
  return   <nav className="navbar navbar-expand-lg navbar-dark bg-dark-purple" id="mainNav">
  <div className="container px-5">
      <a className="navbar-brand" href="./">{title}</a>
      <Menu />
  </div>
</nav>
}