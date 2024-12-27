import React from 'react';
import classes from './styles.module.css';
import Features from "../Features/Features";
import background from "../../images/Background2.svg"
import background2 from "../../images/robot_img.svg"
import icons1 from '../../images/image1.svg'
import icons2 from '../../images/image2.svg'
import icons3 from '../../images/image3.svg'
import icons4 from '../../images/image4.svg'
import icons5 from '../../images/image5.svg'
import icons6 from '../../images/image6.svg'
import icons7 from '../../images/image7.svg'
import icons8 from '../../images/image8.svg'

const ScopeOfApplication = () => {
	return (
		 <>
			 <main className={classes.main}>
				 <div className={classes.main_title_block}>
					 <h2>Сферы применения</h2>
					 <p>В каких областях мы можем помочь</p>
				 </div>

				 <div className={classes.main_block}>
					 <div className={classes.layout_container}>
						 {/* Top row */}
						 <div className={classes.top_row}>
							 <div className={classes.icons_block}><img src={icons1} alt="Icon 1" /></div>
							 <div className={classes.icons_block}><img src={icons2} alt="Icon 2" /></div>
						 </div>

						 {/* Middle section with side elements */}
						 <div className={classes.middle_section}>
							 <div className={classes.left_side}>
								 <div className={classes.icons_block}><img src={icons3} alt="Icon 3" /></div>
								 <div className={classes.icons_block}><img src={icons5} alt="Icon 5" /></div>
							 </div>

							 <div className={classes.duble_images}>
								 <img src={background} alt="Background" />
								 <img src={background2} alt="Robot" />
							 </div>

							 <div className={classes.right_side}>
								 <div className={classes.icons_block}><img src={icons4} alt="Icon 4" /></div>
								 <div className={classes.icons_block_del}><img src={icons6} alt="Icon 6" /></div>
							 </div>
						 </div>

						 {/* Bottom row */}
						 <div className={classes.bottom_row}>
							 <div className={classes.icons_block_search}><img src={icons7} alt="Icon 7" /></div>
							 <div className={classes.icons_block}><img src={icons8} alt="Icon 8" /></div>
						 </div>
					 </div>
				 </div>
			 </main>
			 <Features />
		 </>
	);
};

export default ScopeOfApplication;
