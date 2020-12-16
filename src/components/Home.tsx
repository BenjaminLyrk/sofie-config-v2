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
      galActive: 'AFV C',
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
                
             
                    </div>
                    </>
                  ))
                  return (              
                        <div className="pageWrapper home">
                          <div className="upper">
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
                            <div className="btn-group col4">
                              <h2>SHOW</h2> 
                                <button className='btnGrey'>Sporten</button>
                                <button className='btnGrey'>Nyh</button>
                            </div>
                            <div className="btn-group col4">
                              <h2>STYLE</h2> 
                                <button className='btnOrange'>Sportsnyheder</button>
                                <button className='btnOrange'>NBA</button>
                                <button className='btnOrange'>TENNIS</button>
                            </div>
                          </div>
                          <h3>   Build your galleri</h3>
                          <div className='lower'>
                         
                            <div className="btn-group col1"> 
                                <h2>galleries</h2> 
                                {galleriColm}
                             
                            </div>
                            <div className={this.state.galActive === 'AFV D' ? 'bucketWrapper show' : ' hide'}>
                                  <div className="btn-group bucketLeft">
                                  <h2>AFV D bucket</h2>
                                    <button className="btnStriped">Studio ? </button>
                                    <button className="btnCyan">FLOW GUI</button>
                                    <button className="btnGrey">Sporten</button>
                                    <button className="btnOrange">NBA</button>
                                    
                                  </div>
                                  <div className="btn-group bucketRight">
                                    <h2>AFV D rundowns</h2>
                                    <button className="btnPurple">01 - SPXRT.ON_AIR</button>
                                    <button className="btnPurple">02 - SPORTEN.SPXRT.NBA</button>
                                    <button className="btnStriped"> </button>
                                    <button className="btnStriped"> </button>
                                  </div>
                                  <div className="btn-group col1">
                                    <h2>AFV D actions</h2>
                                    <NavLink exact to="/rundown" className={'btnBrowse'}> {'BROWSE'}</NavLink>
                                    <NavLink exact to="/rundown" className={'btnStart'}> {'CONTROL'}</NavLink>
                                    </div>
                              </div>
                              <div className={this.state.galActive === 'AFV C' ? 'bucketWrapper show' : ' hide'}>
                                  <div className="btn-group bucketLeft">
                                  <h2>AFV D bucket</h2>
                                    <button className="btnStriped"> </button>
                                    <button className="btnStriped"></button>
                                    <button className="btnStriped"></button>
                                    <button className="btnStriped"></button>
                                    
                                  </div>
                                  <div className="btn-group bucketRight">
                                    <h2>AFV C rundowns</h2>
                                    <button className="btnStriped"> </button>
                                    <button className="btnStriped"> </button>
                                    <button className="btnStriped"> </button>
                                    <button className="btnStriped"> </button>
                                  </div>
                                  <div className="btn-group col1">
                                    <h2>AFV C actions</h2>
                                    <NavLink exact to="/rundown" className={'btnBrowse'}> {'BROWSE'}</NavLink>
                                    <NavLink exact to="/rundown" className={'btnStart'}> {'CONTROL'}</NavLink>
                                    </div>
                              </div>
                              <div className={this.state.galActive === 'AFV Q2' ? 'bucketWrapper show' : ' hide'}>
                                  <div className="btn-group bucketLeft">
                                  <h2>AFV Q2 bucket</h2>
                                  <button className="btnStriped"> </button>
                                    <button className="btnStriped"></button>
                                    <button className="btnStriped"></button>
                                    <button className="btnStriped"></button>
                                    
                                  </div>
                                  <div className="btn-group bucketRight">
                                    <h2>AFV Q2 rundowns</h2>
                                    <button className="btnPurple">01 - Q2.ON_AIR</button>
                                    <button className="btnStriped"> </button>
                                    <button className="btnStriped"> </button>
                                    <button className="btnStriped"> </button>
                                  </div>
                                  <div className="btn-group col1">
                                    <h2>AFV Q2 actions</h2>
                                    <NavLink exact to="/rundown" className={'btnBrowse'}> {'BROWSE'}</NavLink>
                                    <NavLink exact to="/rundown" className={'btnStart'}> {'CONTROL'}</NavLink>
                                    </div>
                              </div>
                            
                          </div> 
                            
                        </div>
                          
                          )
              }
}

export default Home;
