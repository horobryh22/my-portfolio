import React from 'react';

import blog from 'assets/img/projects/blog.jpg';
import flashcards from 'assets/img/projects/flashcards.png';
import socialNetwork from 'assets/img/projects/social-network.png';
import todolist from 'assets/img/projects/todolist.png';
import { ProjectType } from 'types';

export const COMPLETED_PROJECTS: ProjectType[] = [
    {
        id: 1,
        title: 'Flashcards',
        description:
            'Flashcards for online training using the question-answer system with the ability to create your own training modules (card decks), as well as their expansion (creating new cards), editing and privacy settings',
        imgUrl: flashcards,
        projectUrl: 'https://flashcards-rho-five.vercel.app',
        codeUrl: 'https://github.com/horobryh22/flashcards',
    },
    {
        id: 2,
        title: 'Blog',
        description: (
            <>
                <div>Application for sharing news and own thoughts with other people</div>
                <br />
                <div>
                    Technology stack: ReactJS, TypeScript, Redux Toolkit, RestAPI, Axios,
                    Redux-Thunk, Material UI, React-markdown
                </div>
            </>
        ),
        imgUrl: blog,
        projectUrl: 'https://blog-mern-frontend-tawny.vercel.app',
        codeUrl: 'https://github.com/horobryh22/blog-mern-frontend/',
    },
    {
        id: 3,
        title: 'Todolist',
        description: (
            <>
                <div>
                    TodoList - a list of tasks that need to be completed, typically
                    organized in order of priority.
                </div>
                <br />
                <div>
                    Technology stack: ReactJS, TypeScript, Redux Toolkit, RestAPI, Axios,
                    Redux-Thunk, Material UI, Unit testing, Storybook,
                </div>
            </>
        ),
        imgUrl: todolist,
        projectUrl: 'https://todolist-ochre-delta.vercel.app',
        codeUrl: 'https://github.com/horobryh22/todolist',
    },
];

export const ACTIVE_PROJECTS: ProjectType[] = [
    {
        id: 1,
        title: 'Social Network',
        description:
            'Simple social network. You can get all the registered users, add or remove then from your friends. Also, you can change your status, add and remove posts. It was one of the first application, where I had practice with React using TypeScript. This application had been written with using class components.',
        imgUrl: socialNetwork,
        projectUrl: 'https://social-network-pi-black.vercel.app',
        codeUrl: 'https://github.com/horobryh22/samurai-way-main',
    },
];
