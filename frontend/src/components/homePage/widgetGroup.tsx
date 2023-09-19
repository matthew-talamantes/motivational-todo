import React, { FC } from "react";
import WidgetWrapper from "./widgets/widgetWrapper";

import styles from "./widgetGroupStyles.module.scss";

export default function WidgetGroup({ widgets }: { widgets: object[] | Promise<object[]> }) {

    const widgetRender = (widget: object, key: number) => {
        const Widget: React.JSX.Element = widget.widgetType;
        const props = widget.widgetProps;
        return (
            <WidgetWrapper key={key}>
                <Widget {...props} />
            </WidgetWrapper>
        );
    };
    if (typeof widgets === 'object' && typeof widgets.then === 'function') {
        return (
            <section className={styles.widgetGroup}>
                <h2>Loading...</h2>
            </section>
        )
    } else {
        return (
            <section className={styles.widgetGroup}>
                {widgets.map((widget, index) => (
                    widgetRender(widget, index)
                )
                )}
            </section>
        );
    }
}