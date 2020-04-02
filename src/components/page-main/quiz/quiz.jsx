import React from 'react';
import './quiz.pcss';

import cn from '../../../utils/cn';

@cn('quiz')
class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false
        }
        this.expand.bind(this);
    }
    expand() {
        this.setState({expanded: !this.state.expanded});
        this.props.emitter();
    }
    quiz = this.props.quiz;
    render(cn) {
        return(
            <div className={ cn() }>
                <div onClick={() => this.expand()} style={{backgroundImage: `url(${this.quiz.cover})`}} className={ cn('outer') }>
                    <h2 className={ cn('title') }>{this.quiz.title}</h2>
                </div>
                <div style={{top: pageYOffset}} className={ cn('inner', {expanded: this.state.expanded}) }>
                    <div className={ cn('content') }>
                        <h2 className={ cn('title', {expanded: true}) }>{this.quiz.title}</h2>
                        <img className={ cn('cover') } src={this.quiz.cover}></img>
                        <p className={ cn('font') }>{this.quiz.inner}</p>
                        <div className={ cn('accept') }>Пройти тест</div>
                    </div>
                    <div onClick={() => this.expand()} className={ cn('go-back') }></div>
                </div>
            </div>
        )
    }
}

export default Quiz;