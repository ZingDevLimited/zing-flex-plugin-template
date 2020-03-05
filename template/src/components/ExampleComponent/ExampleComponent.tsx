import React from "react";
import { StateToProps, DispatchToProps } from "components/ExampleComponent/ExampleComponent.Container";
import { getExampleItems } from "../../services/exampleService";
import { Example } from "models/example";

type Props = StateToProps & DispatchToProps;

export default class ExampleComponent extends React.Component<Props> {
    private updateItemList: (itemList: Example[]) => void;

    constructor(props: Props) {
        super(props);

        this.updateItemList = props.updateItemList;
    }

    async componentDidMount() {
        const allExampleItems = await getExampleItems();
        this.updateItemList(allExampleItems);
    }

    private padRight = { marginRight: "10px" };

    render = () => (
        <section className="section">
            <div className="container">
                <h1 className="title">Hello World!</h1>
                <h2 className="subtitle">Here's a little example to get you started.</h2>
                <div className="panel is-primary">
                    <p className="panel-heading">Some Example Items</p>
                    {this.props.itemList.map((item) => (
                        <p className="panel-block" key={item.id}>
                            <i className="fas fa-database" style={padRight}></i>
                            <span>{item.data}</span>
                        </p>
                    ))}
                    {this.props.itemList.length === 0 ? (
                        <>
                            <p className="panel-block">
                                <div>
                                    <i className="fas fa-2x fa-clock" style={padRight}></i> Just a sec. We're loading
                                    your items...
                                </div>
                            </p>
                            <p className="panel-block">
                                <progress className="progress is-primary is-small"></progress>
                            </p>
                        </>
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        </section>
    );
}
