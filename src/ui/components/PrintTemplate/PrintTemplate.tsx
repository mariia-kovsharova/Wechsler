import { formatClassNames } from '@utils';

interface IPrintTemplateProps {
    alwaysVisible?: boolean;
    children: Readonly<JSX.Element> | ReadonlyArray<JSX.Element>;
}

const PRINTABLE_CLASS_NAME = 'printable';
const ALWAYS_VISIBLE_CLASS_NAME = 'printable-always-visible';

export const PrintTemplate = (props: IPrintTemplateProps): JSX.Element => {
    const { alwaysVisible, children } = props;

    const classNames = formatClassNames({
        [PRINTABLE_CLASS_NAME]: true,
        [ALWAYS_VISIBLE_CLASS_NAME]: !!alwaysVisible,
    });

    return (
        <div className={classNames}>
            {
                children
            }
        </div>
    );
};