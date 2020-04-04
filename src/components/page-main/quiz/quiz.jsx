import React from 'react';
import './quiz.pcss';

import cn from '../../../utils/cn';

const initState = {
    expanded: false,
    started: false,
    qIndex: 0,
    answers: [],
    currentAnswer: ''
}

const answersStack = ['Да', 'Скорее да', 'Скорее нет', 'Нет', 'Не знаю'];

@cn('quiz')
class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
            started: false,
            finished: false,
            qIndex: 0,
            answers: [],
            currentAnswer: '',
            result: {}
        }
        this.expand.bind(this);
        this.start.bind(this);
        this.chooseAnswer.bind(this);
        this.next.bind(this);
    }
    quiz = this.props.quiz;
    questions = this.quiz.questions;
    expand() {
        this.setState({expanded: !this.state.expanded});
        this.props.emitter();
    }
    start() {
        this.setState({started: true});
    }
    close() {
        this.setState(initState);
    }
    chooseAnswer(answer) {
        this.setState({currentAnswer: answer});
    }
    next() {
        if (this.questions[this.state.qIndex + 1]) {
            const tmpAns = this.state.answers.slice(0);
            const answerValue = 6 - (answersStack.indexOf(this.state.currentAnswer) + 1);
            tmpAns.push(answerValue);
            this.setState(prev => {
                return {
                    qIndex: prev.qIndex + 1,
                    currentAnswer: '',
                    answers: tmpAns
                }
            })
        } else {
            let sum = this.state.answers.reduce((i, p) => i + p);
            sum += 6 - (answersStack.indexOf(this.state.currentAnswer) + 1);
            const answerMedium = Math.floor(sum / (this.state.answers.length + 1));
            const answer = this.quiz.results[answerMedium - 1];
            this.setState({
                finished: true,
                result: answer
            })
        }
    }
    render(cn) {
        const question = this.questions[this.state.qIndex];
        const answers = answersStack.map((item, i) => 
        <div 
        onClick={() => this.chooseAnswer(item)} 
        className={ cn('answer', {active: item === this.state.currentAnswer}) } 
        key={i}>{item}
        </div>);
        return(
            <div className={ cn() }>
                <div onClick={() => this.expand()} style={{backgroundImage: `url(${this.quiz.cover})`}} className={ cn('outer') }>
                    <h2 className={ cn('title') }>{this.quiz.title}</h2>
                </div>
                <div style={{top: pageYOffset}} className={ cn('inner', {expanded: this.state.expanded}) }>
                    <div className={ cn('content') }>
                        {!this.state.started ?
                            <div className={ cn('preview-grid') }>
                                <h2 className={ cn('title', {expanded: true}) }>{this.quiz.title}</h2>
                                <img className={ cn('cover') } src={this.quiz.cover}></img>
                                <p className={ cn('font') }>{this.quiz.inner}</p>
                                <div onClick={() => this.start()} className={ cn('accept') }>Пройти тест</div>
                            </div>
                            : !this.state.finished ?
                            <div className={ cn('quiz-grid') }>
                                <h1 className={ cn('question-title') }>{question.title}</h1>
                                <img className={ cn('cover', {q: true}) } src={question.cover}></img>
                                <div className={ cn('answer-stack') }>
                                    {answers}
                                </div>
                                {this.state.currentAnswer && <div onClick={() => this.next()} className={ cn('next') }>Дальше</div>}
                            </div>
                            :
                            <div className={ cn('preview-grid')}>
                                <h2 className={ cn('title', {expanded: true}) }>{this.state.result.title}</h2>
                                <img className={ cn('cover') } src={this.state.result.cover}></img>
                                <p className={ cn('font') }>{this.state.result.inner}</p>
                            </div>
                        }
                    </div>
                    <div onClick={() => this.close()} className={ cn('go-back') }></div>
                </div>
            </div>
        )
    }
}

export default Quiz;