    <!-- 页眉 -->
    <header class="header">
        <a href="home.html" class="logo"> 网上农博会 </a>
        <nav class="navbar">
            <a href="home.html">home</a>
            <a href="shop.html">shop</a>
            <!-- <a href="">about</a> -->
            <!-- <a href="">review</a>
            <a href="">blog</a> -->
            <!-- <a href="shopcart.html">shopCart</a> -->
            <a href="JoinUs.html">Join Us</a>

        </nav>

        <div class="icons">
            <div id="menu-btn" class="fas fa-bars"></div>
            <div id="search-btn" class="fas fa-search"></div>
            <div id="cart-btn" class="fas fa-shopping-cart"></div>
            <div id="login-btn" class="fas fa-user"></div>
        </div>

        <form action="" class="search-form">
            <!-- 快捷输入 input:search#search-box -->
            <input type="search" name="" placeholder="在此处搜索" id="searche-box">
            <label for="search-box" class="fas fa-search"></label>
            <!-- label的for值和input的id值相同    相当于input附带的文字说明
                当用户聚焦到这个表单输入元素时，屏幕阅读器可以读出标签，
                让使用辅助技术的用户更容易理解应输入什么数据
                可以点击关联的标签来聚焦或者激活这个输入元素
            -->
        </form>

        <div class="shopping-cart">
            <div class="box">
                <i class="fas fa-times"></i>
                <img src="image/cart-1.jpg" alt="">
                <div class="content">
                    <h3>organic food</h3>
                    <span class="quantity">1</span>
                    <span class="multiply">x</span>
                    <span class="price">￥5.99</span>
                </div>
            </div>

            <div class="box">
                <i class="fas fa-times"></i>
                <img src="image/cart-2.jpg" alt="">
                <div class="content">
                    <h3>organic food</h3>
                    <span class="quantity">1</span>
                    <span class="multiply">x</span>
                    <span class="price">￥5.99</span>
                </div>
            </div>

            <div class="box">
                <i class="fas fa-times"></i>
                <img src="image/cart-3.jpg" alt="">
                <div class="content">
                    <h3>organic food</h3>
                    <span class="quantity">1</span>
                    <span class="multiply">x</span>
                    <span class="price">￥5.99</span>
                </div>
            </div>
            <h3 class="total"> total : <span>16.96</span> </h3>
            <!-- <h3 class="total"> total : 16.96</h3> -->
            <a href="#" class="btn">结账</a>
        </div>

        <form action="home.html" class="login-form" method="POST">
            <h3>登录</h3>
            <input type="text" placeholder="请输入账号" class="box" id="username" name="username">
            <input type="password" placeholder="请输入密码" class="box" id="password" name="password">
            <div class="remember">
                <input type="checkbox" name="" id="remember-me">
                <label for="remember-me">记住我</label>
            </div>
            <input type="submit" value="登录" class="btn">
            <p>忘记密码？<a href="#">点击此处</a></p>
            <p>没有账号？<a href="#">注册一个</a></p>
        </form>
    </header>
    <!-- 页眉结束 -->