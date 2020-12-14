import React from 'react';
import { NavLink } from 'react-router-dom';
import MakeButton from './MakeButton';
import galleriItems from '../data/galleries.json';

let studios: string[] = ['Studio 3', 'Studio 4', 'Studio 12']; 
let rundowns: string[] = ['SPXRT.ON-AIR', 'SPORTEN.ON-AIR', 'NYHEDERNE-TEST.SOFIE.ON-AIR']; 
let gui: string[] = ['FLOW GUI', 'TOUCH GUI', 'TEST GUI']; 

interface IState {
	text: string,
  deviceView: string,
  infoView: string,
  deviceId: number,
  galleriId: number,
  galActive: string,
  stuActive: string,
  guiActive: string,
  redirect: boolean
}
interface HomeProps {
  
}

class Home extends React.Component<HomeProps, IState> {
   constructor(props: HomeProps) {
    super(props)
    this.state = {
      text: 'settings',
      deviceView: 'defaultView',
      infoView: 'defaultView',
      deviceId: 0,
      galleriId: 0,
      galActive: '',
      stuActive: '',
      guiActive: '',
      redirect: false
    }
    //always have this when using mouseclick/over functions
    this.changeGalleri  = this.changeGalleri.bind(this)
  }
  //change state.view from mouseCLick
 changeGalleri(e:string, name: string){
  this.setState({galActive: name })
    }

    changeStudio(e:string, name: string){
      this.setState({stuActive: name })
        }
  changeGui(e:string, name: string){
    this.setState({guiActive: name })
      }

    render(){  

                //galleries
                const galleriColm = galleriItems.content.galleries.map((items: any, index: Number) => ( 
                  <>
                 
                  <button 
                    key={items.name+items.id} 
                    className={this.state.galActive === items.name ? 'btnGreen active ' : 'btnGreen show'} 
                    value={items.id} 
                    onClick={() => this.changeGalleri('s'+index, items.name)} 
                    >
                    {items.name}
                  </button>
                  <div className="umd"></div>
                  <div className={this.state.galActive === items.name ? 'show' : 'hide'} >
                      <NavLink exact to="/rundown" className={'btnBrowse'}> {items.name + ' BROWSE'}</NavLink>
                      <NavLink exact to="/rundown" className={'btnStart'}> {items.name + ' CONTROL'}</NavLink>
             
                    </div>
                    </>
                  ))
                  return (              
                          <div className="pageWrapper home">
                                <div className="btn-group col1"> 
                                <h2>galleries</h2> 
                                {galleriColm}
                                  </div>
                                  <div className="btn-group col2">
                                  <h2>Studios</h2> 
                                      {studios.map((i, index) => (
                                       
                                       <button 
                                       key={i+index} 
                                       className={this.state.stuActive === i ? 'btnBlue active ' : 'btnBlue show'} 
                                       value={i} 
                                       onClick={() => this.changeStudio('s'+index, i)} 
                                       >
                                       {i}
                                     </button>
                                     
                                      ))}
                                  </div>
                                  <div className="btn-group col3">
                                  <h2>Rundowns</h2> 
                                      {rundowns.map(i => (
                                                <MakeButton
                                                btnText   = {i}
                                                btnClass  = {'btnPurple'}
                                                btnValue  = {i}
                                                />
                                      ))}
                                  </div>
                                  <div className="btn-group col4">
                                    <h2>GUI</h2> 
                                    {gui.map((i, index) => (
                                       <button 
                                       key={i+index} 
                                       className={this.state.guiActive === i ? 'btnCyan active ' : 'btnCyan show'} 
                                       value={i} 
                                       onClick={() => this.changeGui('s'+index, i)} 
                                       >
                                       {i}
                                     </button>
                                     ))}
                                  </div>
                                  <div className="below">

                                  </div>
                                </div>
                          )
              }
}

export default Home;
