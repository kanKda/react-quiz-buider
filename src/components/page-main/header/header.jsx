import React from 'react';

import cn from '../../../utils/cn';

@cn('header')
class Header extends React.Component {
    render(cn) {
        return(
            <header className={ cn() }>
                <section className="content content--header">
                    <h1 className={ cn('logo') }>QBuilder</h1>
                </section>
                <div className={ cn('br') }></div>
            </header>
        )
    }
}

export default Header;