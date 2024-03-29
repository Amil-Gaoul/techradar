import { GenericClassDecorator, Type } from './common';

/**
 * @returns {GenericClassDecorator<Type<any>>}
 * @constructor
 */
export const Injectable = (): GenericClassDecorator<Type<any>> => {
    return (target: Type<any>): void => {
        // do something with `target`, e.g. some kind of validation or passing it to the Injector and store them
    };
};
