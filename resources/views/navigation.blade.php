<nav id="navbar" class="navbar stikcy-top navbar-expand-lg p-0 cs-background-blue">
    <div class="collapse navbar-collapse">
        <a href="#" class="nav-bar-brand m-2">
            <img src="{{ asset('images/Logo%20Universitas%20Brawijaya.png') }}" width="75" height="75"
                class="img-fluid" alt="not found" />
        </a>
        <ul class="navbar-nav">
            <a class="nav-item mx-4 item-menu {{ Route::is('akademik') ? 'activeLink' : '' }}" href="/akademik">
                <p class="m-0">Akademik</p>
                <p class="m-0 cs-english-text">
                    Academic
                </p>
            </a>

            <a class="nav-item mx-4 item-menu {{ Route::is('registrasi') ? 'activeLink' : '' }}" href="/registrasi">
                <p class="m-0">Registrasi</p>
                <p class="m-0 cs-english-text">
                    Registration
                </p>
            </a>

            <a class="nav-item mx-4 item-menu {{ Route::is('biodata') ? 'activeLink' : '' }}" href="/biodata">
                <p class="m-0">Biodata</p>
                <p class="m-0 cs-english-text">
                    Biodata
                </p>
            </a>

            <a class="nav-item mx-4 item-menu {{ Route::is('aplikasi') ? 'activeLink' : '' }}" href="/aplikasi">
                <p class="m-0">Aplikasi</p>
                <p class="m-0 cs-english-text">
                    Application
                </p>
            </a>

            <a class="nav-item mx-4 item-menu {{ Route::is('kemahasiswaan') ? 'activeLink' : '' }}"
                href="/kemahasiswaan">
                <p class="m-0">Kemahasiswaan</p>
                <p class="m-0 cs-english-text">
                    Student Affairs
                </p>
            </a>

            <a class="nav-item mx-4 item-menu {{ Route::is('login') ? 'activeLink' : '' }}" href="/login">
                <p class="m-0">Keluar</p>
                <p class="m-0 cs-english-text">
                    Log Out
                </p>
            </a>
        </ul>
    </div>

</nav>
