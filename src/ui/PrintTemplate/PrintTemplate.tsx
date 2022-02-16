import { formatClassNames } from '../../lib/utils';

interface IPrintTemplateProps {
    alwaysVisible?: boolean;
    children: Readonly<JSX.Element> | ReadonlyArray<JSX.Element>;
}

const PRINTABLE_CLASSNAME = 'printable';
const ALWAYS_VISIBLE_CLASSNAME = 'printable-always-visible';

export const PrintTemplate = (props: IPrintTemplateProps): JSX.Element => {
    const { alwaysVisible, children } = props;

    const classNames = formatClassNames({
        [PRINTABLE_CLASSNAME]: true,
        [ALWAYS_VISIBLE_CLASSNAME]: !!alwaysVisible,
    });

    return (
        <div className={classNames}>
            {
                children
            }
        </div>
    );
};