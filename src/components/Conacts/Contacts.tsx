import React from 'react';
import classes from './Contacts.module.css';
import commonClasses from '../../common/styles/Container.module.css';

export const Contacts = () => {
    return (
        <div className={classes.contacts}>
            <div className={`${commonClasses.container} ${classes.container}`}>
                <h2 className={commonClasses.title}>Contacts</h2>
                <form action="">
                    <input type="text"/>
                    <input type="text"/>
                    <textarea></textarea>
                </form>
                <button>Send</button>
            </div>
        </div>
    );
};
