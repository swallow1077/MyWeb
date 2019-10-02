function init()
{
    let count = 0;
    let transparent = nextactive = 1;
    let active = nowactive = leftA = leftN = 0;
    var timer;
    let execution = executionM = limitshow = breadpoint = webset = mobset = key = false;
    let burger = document.getElementsByClassName('burger');
    let menu = document.getElementsByClassName('menu_box');
    let sub = document.getElementsByClassName('subscription');
    let community = document.getElementsByClassName('community_box');

    let service = document.getElementsByClassName('service_item');
    let note = document.getElementsByClassName('note');
    let adapt = document.getElementsByClassName('adapt');
    let generic = document.getElementsByClassName('generic');
    let header = document.getElementsByTagName('header');
    let banner = document.getElementsByClassName('banner');
    let inspirational = document.getElementsByClassName('inspirational_box');
    let inspirationalM = document.getElementsByClassName('inspirational');

    let news = document.getElementsByClassName('news_box');

    let values = document.getElementsByClassName('our_values');
    let bread = document.getElementsByClassName('bread');

    let mb_text = document.getElementsByClassName('mb_text');

    let showMenu = function ()
    {
        let display = menu[0].style.display;

        let show = function ()
        {
            if( !execution )
            {
                execution = true;
                menu[0].style.display = 'block';
                sub[0].style.display = 'block';
                community[0].style.display = 'flex';
                burger[0].style.transform = 'rotate(270deg)';
                setTimeout( () => 
                { 
                    menu[0].style.marginLeft = '0%';
                    sub[0].style.marginLeft = '0%';
                    community[0].style.marginLeft = '0%';

                    execution = false; 
                } , 100 );
            }
        }

        let hide = function ()
        {
            if( !execution )
            {
                execution = true;
                menu[0].style.marginLeft = '100%';
                sub[0].style.marginLeft = '100%';
                community[0].style.marginLeft = '100%';
                burger[0].style.transform = 'rotate(0deg)';
                setTimeout( () => 
                {
                    menu[0].style.display = 'none';
                    sub[0].style.display = 'none';
                    community[0].style.display = 'none';

                    execution = false;
                    
                } , 1100 );
            }
        }
        display === 'block' ? hide() : show();
    }
    
    let expand = function ( e )
    {
        let activeObject = e.target.src.split('/');

        activeObject = activeObject[activeObject.length - 1];
        activeObject = activeObject.split('.');
        activeObject = activeObject[activeObject.length - 2];


        if( activeObject == 'note' )
        {
            note[0].classList.remove("notactive");
            adapt[0].classList.add("notactive");
            if( adapt[0].classList.contains('left') )
            {
                adapt[0].classList.remove("left");
                adapt[0].classList.add("right");
            }
            else if( adapt[0].classList.contains('notactive') )
            {
                adapt[0].classList.add("right");
            }
            generic[0].classList.add("notactive");
        }
        else if( activeObject == 'adapt' )
        {
            note[0].classList.add("notactive");
            adapt[0].classList.remove("notactive");
            if( adapt[0].classList.contains('left') )
            {
                adapt[0].classList.remove("left");
            }
            else if( adapt[0].classList.contains('right') )
            {
                adapt[0].classList.remove("right");
            }
            generic[0].classList.add("notactive");
        }
        else
        {
            note[0].classList.add("notactive");
            adapt[0].classList.add("notactive");
            if( adapt[0].classList.contains('right') )
            {
                adapt[0].classList.remove("right");
                adapt[0].classList.add("left");
            }
            else if( !adapt[0].classList.contains('notactive') )
            {
                adapt[0].classList.add("left");
            }
            generic[0].classList.remove("notactive");
        }
    }

    let expandM = function ( e )
    {
        function reHide()
        {
            for( let h = 0 ; h < mb_text.length ; h++ )
            {
                mb_text[h].style.display = 'none';
                if( service[h].classList.contains('positionTop') ) service[h].classList.remove('positionTop');
                if( service[h].classList.contains('positionLeft') ) service[h].classList.remove('positionLeft');
                if( service[h].classList.contains('positionRight') ) service[h].classList.remove('positionRight');
            }
        }

        reHide();

        let activeObject = e.target.src.split('/');
        activeObject = activeObject[activeObject.length - 1];
        activeObject = activeObject.split('.');
        activeObject = activeObject[activeObject.length - 2];

        if( activeObject == 'note' )
        {
            mb_text[0].style.display = 'inline-block';
        }
        else if( activeObject == 'adapt' )
        {
            mb_text[1].style.display = 'inline-block';
        }
        else if( activeObject == 'generic' )
        {
            mb_text[2].style.display = 'inline-block';
        }

        this.classList.add('positionTop');

        if( this.classList.contains('positionLeft') ) this.classList.remove('positionLeft');
        if( this.classList.contains('positionRight') ) this.classList.remove('positionRight');

        for( let c = 0 ; c < service.length ; c++ )
        {
            if( service[c] != this && !key )
            {
                key = true;
                service[c].classList.add('positionLeft');
            }
            else if( service[c] != this && key )
            {
                service[c].classList.add('positionRight');
                key = false;
            }
        }
        
    }

    let dragCard = function ( event )
    {
        window.event.returnValue = false; //取消反白

        let position = event.clientX;
        let ObjectX = inspirational[0].style.marginLeft || 0;

        function removeTransparentLeft()
        {
            if( !limitshow || transparent > 0 )
            {
                limitshow = true;
                inspirationalM[0].style.background = `linear-gradient(to right, rgba(100, 100, 100, ${transparent})0%, rgba(255, 255, 255, .0)10%)`;
                transparent -= 0.01;
                if( transparent < 0 ) 
                {
                    setTimeout( () => {
                        limitshow = false;
                        transparent = 1;
                    } , 500 );
                }
                else if( transparent > 0 ) setTimeout( removeTransparentLeft , 30 );
            }
        }
        function removeTransparentRight()
        {
            if( !limitshow || transparent > 0 )
            {
                limitshow = true;
                inspirationalM[0].style.background = `linear-gradient(to left, rgba(100, 100, 100, ${transparent})0%, rgba(255, 255, 255, .0)10%)`;
                transparent -= 0.01;
                if( transparent < 0 ) 
                {
                    setTimeout( () => {
                        limitshow = false;
                        transparent = 1;
                    } , 500 );
                }
                else if( transparent > 0 ) setTimeout( removeTransparentRight , 30 );
            }
        }

        function dragIt( eventMove )
        {
            if( parseInt(ObjectX) - (position - eventMove.pageX) < 0 && parseInt(ObjectX) - (position - eventMove.pageX) > -(parseInt(window.getComputedStyle(inspirational[0] , null).width) - (document.body.clientWidth * 0.8)) )
            {
                inspirational[0].style.marginLeft = `${ parseInt(ObjectX) - (position - eventMove.pageX) }px`;
            }
            else if( parseInt(ObjectX) - (position - eventMove.pageX) > 0 )
            {
                setTimeout( removeTransparentLeft , 0 );
            }
            else if( parseInt(ObjectX) - (position - eventMove.pageX) < -(parseInt(window.getComputedStyle(inspirational[0] , null).width) - (document.body.clientWidth * 0.8)) )
            {
                setTimeout( removeTransparentRight , 0 );
            }
        }

        function removeDragCard()
        {
            inspirational[0].removeEventListener( 'mouseover' , dragIt , false );
            ObjectX = inspirational[0].style.marginLeft;
        }

        inspirational[0].addEventListener( 'mouseover' , dragIt , false );
        document.addEventListener( 'mouseup' , removeDragCard , false );
    }

    let dragCardM = function ( event )
    {
        window.event.returnValue = false; //取消反白

        let position = event.touches[0].clientX;
        let ObjectX = inspirational[0].style.marginLeft || 0;



        function removeTransparentLeft()
        {
            if( !limitshow || transparent > 0 )
            {
                limitshow = true;
                inspirationalM[0].style.background = `linear-gradient(to right, rgba(100, 100, 100, ${transparent})0%, rgba(255, 255, 255, .0)10%)`;
                transparent -= 0.01;
                if( transparent < 0 ) 
                {
                    setTimeout( () => {
                        limitshow = false;
                        transparent = 1;
                    } , 500 );
                }
                else if( transparent > 0 ) setTimeout( removeTransparentLeft , 30 );
            }
        }
        function removeTransparentRight()
        {
            if( !limitshow || transparent > 0 )
            {
                limitshow = true;
                inspirationalM[0].style.background = `linear-gradient(to left, rgba(100, 100, 100, ${transparent})0%, rgba(255, 255, 255, .0)10%)`;
                transparent -= 0.01;
                if( transparent < 0 ) 
                {
                    setTimeout( () => {
                        limitshow = false;
                        transparent = 1;
                    } , 500 );
                }
                else if( transparent > 0 ) setTimeout( removeTransparentRight , 30 );
            }
        }

        function dragIt( eventMove )
        {

            if( parseInt(ObjectX) - (position - eventMove.touches[0].pageX) < 0 && parseInt(ObjectX) - (position - eventMove.touches[0].pageX) > -(parseInt(window.getComputedStyle(inspirational[0] , null).width) - (document.body.clientWidth * 0.8)) )
            {
                inspirational[0].style.marginLeft = `${ parseInt(ObjectX) - (position - eventMove.touches[0].pageX) }px`;
            }
            else if( parseInt(ObjectX) - (position - eventMove.touches[0].pageX) > 0 )
            {
                setTimeout( removeTransparentLeft , 0 );
            }
            else if( parseInt(ObjectX) - (position - eventMove.touches[0].pageX) < -(parseInt(window.getComputedStyle(inspirational[0] , null).width) - (document.body.clientWidth * 0.8)) )
            {
                setTimeout( removeTransparentRight , 0 );
            }
        }

        function removeDragCard()
        {
            inspirational[0].removeEventListener( 'touchmove' , dragIt , false );
            ObjectX = inspirational[0].style.marginLeft;
        }

        inspirational[0].addEventListener( 'touchmove' , dragIt , false );
        document.addEventListener( 'touchend' , removeDragCard , false );
    }

    let stickIt = function ()
    {
        window.pageYOffset > 952 ? execution = true : execution = false;

        if( execution )
        {
            header[0].classList.add("stickIt");
        }
        else
        {
            header[0].classList.remove("stickIt");
        }
    }

    let slider = function (x)
    {
        count ++;
        

        if( count == 1 && !executionM )
        {
            executionM = true;

            for(let i = 0 ; i < news.length ; i++ )
            {
                news[i].style.left = `${i * 100}%`;
                news[i].style.zIndex = `-${i}`;
            }
            news[2].style.left = `-100%`;

            if( webset ) bread[0].addEventListener( 'click' , lightPoint , false );
            else
            {
                banner[0].addEventListener( 'touchstart' , touchE , false );
            }
        }

        if( breadpoint )
        {
            if( x > active )
            {
                if( x - active > 1 )
                {
                    news[0].style.zIndex = '-1';
                    news[0].style.left = '100%';
                    bread[0].getElementsByTagName('li')[0].style.backgroundColor = 'rgba(222, 222, 222, .2)';
                    news[1].style.zIndex = '-2';
                    news[1].style.left = '-100%';
                    news[2].style.zIndex = '0';
                    news[2].style.left = '0%';
                    bread[0].getElementsByTagName('li')[2].style.backgroundColor = 'rgba(222, 222, 222, .8)';

                    if( news[0].style.left == '-200%' )
                    setTimeout( () => {
                        news[0].style.zIndex = '-2';
                        news[0].style.left = '100%'
                    } , 1000 );

                    active = x;
                }
                else
                {
                    
                    news[active].style.zIndex = '-1';
                    news[active].style.left = '-100%';
                    bread[0].getElementsByTagName('li')[active].style.backgroundColor = 'rgba(222, 222, 222, .2)';
                    if( x + 1 < news.length )
                    {
                        if( x + 1 == 2 )
                        {
                            news[x + 1].style.zIndex = '-2';
                            news[x + 1].style.left = '100%';
                        }
                        else
                        {
                            news[x + 1].style.zIndex = '-1';
                            news[x + 1].style.left = '100%';
                        }
                    }
                    else if( x + 1 == news.length )
                    {
                        news[0].style.zIndex = '-2';
                        news[0].style.left = '100%';
                    }
                    news[x].style.zIndex = '0';
                    news[x].style.left = '0%';
                    bread[0].getElementsByTagName('li')[x].style.backgroundColor = 'rgba(222, 222, 222, .8)';

                    active = x;
                }
            }
            else if( x < active )
            {
                if( active - x > 1 )
                {
                    news[0].style.zIndex = '0';
                    news[0].style.left = '0%';
                    bread[0].getElementsByTagName('li')[2].style.backgroundColor = 'rgba(222, 222, 222, .2)';
                    news[1].style.zIndex = '-2';
                    news[1].style.left = '100%';
                    news[2].style.zIndex = '-1';
                    news[2].style.left = '-100%';
                    // setTimeout( () => {news[2].style.left = '100%'} , 1000 );
                    bread[0].getElementsByTagName('li')[0].style.backgroundColor = 'rgba(222, 222, 222, .8)';

                    active = 0;
                }
                else
                {
                    news[active].style.zIndex = '-1';
                    news[active].style.left = '100%';
                    bread[0].getElementsByTagName('li')[active].style.backgroundColor = 'rgba(222, 222, 222, .2)';
                    if( x - 1 >= 0 )
                    {
                        news[x - 1].style.zIndex = '-2';
                        news[x - 1].style.left = '-100%';
                    }
                    else if( x - 1 < 0 )
                    {
                        news[2].style.zIndex = '-2';
                        news[2].style.left = '-100%';
                    }
                    news[x].style.zIndex = '0';
                    news[x].style.left = '0%';
                    bread[0].getElementsByTagName('li')[x].style.backgroundColor = 'rgba(222, 222, 222, .8)';

                    active = x;
                }
            }

            if(active == 3) active = 0;
            count = 0;

            breadpoint = false;
        }

        if( count == 5 && !breadpoint )
        {
            active++;
            if(active == 3) active = 0;

            for( let i = 0 ; i < news.length ; i++ )
            {
                if( i < active )
                {
                    if( active - 2 == i )
                    {
                        news[active - 2].style.zIndex = '-2';
                        news[active - 2].style.left = '100%';
                        bread[0].getElementsByTagName('li')[active - 2].style.backgroundColor = 'rgba(222, 222, 222, .2)';

                    }
                    else if( active - 1 < 0 )
                    {
                        news[news.length - 1].style.zIndex = '-1';
                        news[news.length - 1].style.left = '-100%';
                        bread[0].getElementsByTagName('li')[news.length - 1].style.backgroundColor = 'rgba(222, 222, 222, .2)';
                    }
                    else
                    {
                        news[active - 1].style.zIndex = '-1';
                        news[active - 1].style.left = '-100%';
                        bread[0].getElementsByTagName('li')[active - 1].style.backgroundColor = 'rgba(222, 222, 222, .2)';
                    }
                }
                else if( i > active )
                {
                    if( active + 2 == i)
                    {
                        news[active + 2].style.zIndex = '-1';
                        news[active + 2].style.left = '-100%';
                        bread[0].getElementsByTagName('li')[active + 2].style.backgroundColor = 'rgba(222, 222, 222, .2)';
                    }
                    else if( active + 1 == news.length )
                    {
                        news[0].style.zIndex = '-2';
                        news[0].style.left = '100%';
                        bread[0].getElementsByTagName('li')[0].style.backgroundColor = 'rgba(222, 222, 222, .2)';
                    } 
                    else
                    {
                        news[active + 1].style.zIndex = '-2';
                        news[active + 1].style.left = '100%';
                        bread[0].getElementsByTagName('li')[active + 1].style.backgroundColor = 'rgba(222, 222, 222, .2)';
                    } 
                }
                else
                {
                    news[active].style.zIndex = '0';
                    news[active].style.left = '0%';
                    bread[0].getElementsByTagName('li')[active].style.backgroundColor = 'rgba(222, 222, 222, .8)';
                }
            }
            
            count = 0;
        }

        timer = setTimeout( slider , 1000 )
    }

    function stopSlider()
    {
        clearTimeout( timer );
    }

    function lightPoint( e )
    {
        for( let x = 0 ; x < bread[0].getElementsByTagName('li').length ; x++ )
        if( e.target == bread[0].getElementsByTagName('li')[x] && !breadpoint )
        {
            stopSlider();
            count = 4;
            leftA = 100;
            breadpoint = true;
            slider(x);
        }
    }

    function touchE( e )
    {
        for( let qr = 0 ; qr < news.length ; qr++ )
        {
            news[qr].style.transition = '';
        }

        let setposition;

        stopSlider();

        setposition = e.touches[0].pageX;

        function touchD()
        {

            for( let qr = 0 ; qr < news.length ; qr++ )
            {
                news[qr].style.transition = 'left 1s';
            }

            if( parseInt(news[active].style.left) >= 50 )
            {
                if(active - 1 < 0)
                {
                    bread[0].getElementsByTagName('li')[2].style.backgroundColor = 'rgba(222, 222, 222, .8)';
                    news[2].style.zIndex = '0';
                    news[2].style.left = '0%';
                }
                else
                {
                    bread[0].getElementsByTagName('li')[active-1].style.backgroundColor = 'rgba(222, 222, 222, .8)';
                    news[active-1].style.zIndex = '0';
                    news[active-1].style.left = '0%';
                }
                bread[0].getElementsByTagName('li')[active].style.backgroundColor = 'rgba(222, 222, 222, .2)';
                news[active].style.left = '100%';
                if(active + 1 >= news.length )
                {
                    news[0].style.zIndex = '-2';
                    news[0].style.left = '-100%';
                }
                else
                {
                    news[active+1].style.zIndex = '-2';
                    news[active+1].style.left = '-100%';
                }
                
                active = active - 1;
                if( active < 0 ) active = 2;
            }
            else if( parseInt(news[active].style.left) <= -50 )
            {
                if(active - 1 < 0)
                {
                    news[2].style.zIndex = '-2';
                    news[2].style.left = '100%';
                }
                else
                {
                    news[active-1].style.zIndex = '-2';
                    news[active-1].style.left = '100%';
                }
                bread[0].getElementsByTagName('li')[active].style.backgroundColor = 'rgba(222, 222, 222, .2)';
                news[active].style.left = '-100%';
                if(active + 1 >= news.length )
                {
                    bread[0].getElementsByTagName('li')[0].style.backgroundColor = 'rgba(222, 222, 222, .8)';
                    news[0].style.zIndex = '0';
                    news[0].style.left = '0%';
                }
                else
                {
                    bread[0].getElementsByTagName('li')[active+1].style.backgroundColor = 'rgba(222, 222, 222, .8)';
                    news[active+1].style.zIndex = '0';
                    news[active+1].style.left = '0%';
                }
                
                active = active + 1;
                if( active >= news.length ) active = 0;
            }
            else
            {
                if(active - 1 < 0)
                {
                    news[2].style.zIndex = '-2';
                    news[2].style.left = '-100%';
                }
                else
                {
                    news[active-1].style.zIndex = '-2';
                    news[active-1].style.left = '-100%';
                }
                news[active].style.zIndex = '0';
                news[active].style.left = '0%';
                if(active + 1 >= news.length )
                {
                    news[0].style.zIndex = '-2';
                    news[0].style.left = '100%';
                }
                else
                {
                    news[active+1].style.zIndex = '-2';
                    news[active+1].style.left = '100%';
                }
                
            }

            banner[0].removeEventListener( 'touchmove' , touchM , false );
            banner[0].removeEventListener( 'touchend' , touchD , false );
            mobset = false;

            count = 0;
            slider();
        }
        
        let positionM;

        function touchM( e )
        {
            positionM = e.touches[0].pageX;

            if( parseInt(parseInt(news[active].style.left) + (positionM - setposition) / 100 ) < 80 && parseInt(parseInt(news[active].style.left) + (positionM - setposition) / 100 ) > -80 )
            {
                if( active - 1 < 0 )
                news[2].style.left = `${parseInt(parseInt(news[active].style.left) + (positionM - setposition) / 10 - 100)}%`;
                else
                news[active - 1].style.left = `${parseInt(parseInt(news[active].style.left) + (positionM - setposition) / 10 - 100)}%`;
                news[active].style.left = `${parseInt(parseInt(news[active].style.left) + (positionM - setposition) / 10 )}%`;
                if( active + 1 >= news.length )
                {
                    news[0].style.left = `${parseInt(news[active].style.left) + 100}%`;
                }
                else
                {
                    news[active + 1].style.left = `${parseInt(news[active].style.left) + 100}%`;
                }
            }
            
        }

        banner[0].addEventListener( 'touchmove' , touchM , false );
        banner[0].addEventListener( 'touchend' , touchD , false );
        
    }

    function grow( e )
    {
        (function()
        {
            for( let i = 0 ; i < values[0].getElementsByClassName('values').length ; i++ )
            {
                values[0].getElementsByTagName('ul')[i].style.display = 'none';
                values[0].getElementsByClassName('values')[i].style.flexGrow = '1';
            }
        }())

        for( let j = 0 ; j < values[0].getElementsByClassName('values').length ; j++ )
        if( e.target == values[0].getElementsByClassName('values')[j] )
        {
            e.target.style.flexGrow = '3';
            e.target.getElementsByTagName('ul')[0].style.display = 'block';
        }
    }

    let mobile = function () //手機版
    {
        let web = location.pathname.split('/');
        web = web[web.length - 1];

        burger[0].addEventListener( 'click' , showMenu , false );

        if( web === 'index.html' )
        {
            mb_text[0].style.display = 'inline-block';
            note[0].addEventListener( 'click' , expandM , false );
            adapt[0].addEventListener( 'click' , expandM , false );
            generic[0].addEventListener( 'click' , expandM , false );
        }
        else if( web === 'studio.html' )
        {
            inspirational[0].addEventListener( 'touchstart' , dragCardM , false );
        }
        else if( web === 'news.html')
		{
            for( let i = 0 ; i < news.length ; i++ )
            {
                bread[0].innerHTML += '<li></li>';
            }
            bread[0].getElementsByTagName('li')[0].style.backgroundColor = 'rgba(222, 222, 222, .8)';
            timer = setTimeout( slider , 1000 );
        }
        
    }
    let desktop = function () //桌機版
    {
        webset = true;


        let web = location.pathname.split('/');

        web = web[web.length - 1];
        

        if( web === 'index.html' )
        {
            document.getElementsByClassName('service')[0].addEventListener( 'click' , expand , false );
        }
        else if( web === 'studio.html' )
        {
            inspirational[0].addEventListener( 'mousedown' , dragCard , false );
        }
        else if( web === 'news.html' )
        {
            for( let i = 0 ; i < news.length ; i++ )
            {
                bread[0].innerHTML += '<li></li>';
            }
            bread[0].getElementsByTagName('li')[0].style.backgroundColor = 'rgba(222, 222, 222, .8)';
            timer = setTimeout( slider , 1000 );
        }

        window.addEventListener('scroll', () => {stickIt()} ,true);
    }

    window.innerWidth < 767 ? mobile() : desktop();
}

window.addEventListener( 'load' , init , false );