import img1 from '../../img/playlist01.png'
import img2 from '../../img/playlist02.png'
import img3 from '../../img/playlist03.png'

export const Sidebar = () => {
    return (
      <div className="main__sidebar sidebar">
      <div className="sidebar__personal">
        <p className="sidebar__personal-name">Sergey.Ivanov</p>
        <div className="sidebar__avatar"></div>
      </div>    
      <div className="sidebar__block">
        <div className="sidebar__list">
          <div className="sidebar__item">
            <a className="sidebar__link" href="#">
              <img
                className="sidebar__img"
                src= {img1}
                alt="day's playlist"
              />
            </a>
          </div>
          <div className="sidebar__item">
            <a className="sidebar__link" href="#">
              <img
                className="sidebar__img"
                src={img2}
                alt="day's playlist"
              />
            </a>
          </div>
          <div className="sidebar__item">
            <a className="sidebar__link" href="#">
              <img
                className="sidebar__img"
                src={img3}
                alt="day's playlist"
              />
            </a>
          </div>
        </div>
      </div>        
      </div>
  
    )
}