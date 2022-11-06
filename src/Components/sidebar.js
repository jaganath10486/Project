import React from "react";
import '../Styles/sidebar.css'

function Sidebar(props)
{
    return(
        <div className="sidebar">
            <div class="nav" id="nav">
            <nav class="nav__content">

                <a href="#" class="nav__logo">
                    <span class="nav__logo-name">Healthy</span>
                </a>

                <div class="nav__list" id="top__list">
                    <a href="#" class="nav__link active-link">
                        <i class="fa fa-film" aria-hidden="true"></i>
                        <span class="nav__name">My Apps</span>
                    </a>
    
                    <a href="#" class="nav__link">
                        <i class="fa fa-users" aria-hidden="true"></i>
                        <span class="nav__name">Resources</span>
                    </a>
                </div>

                <div className="nav__list" id="bottom__list">
                    <a href="#" class="nav__link">
                        <i class="fa fa-home" aria-hidden="true"></i>
                        <span class="nav__name">My Home</span>
                    </a>
    
                    <a href="#" class="nav__link">
                        <i class="fa fa-cog" aria-hidden="true"></i>
                        <span class="nav__name">Settings</span>
                    </a>
    
                    <a href="#" class="nav__link">
                        <i class="fa fa-sign-out" aria-hidden="true"></i>
                        <span class="nav__name">Log out</span>
                    </a>
                </div>
            </nav>
        </div>
        </div>
    )
}

export default React.memo(Sidebar)