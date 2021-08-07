import React, {Component, ReactNode} from "react";
import Page from "core/Page";
import { Ref } from "lib";


/**
 * Index Page
 * @author Ingo Andelhofs
 */
class IndexPage extends Component {

  private ref = new Ref<HTMLDivElement>();


  // Lifecycle
  public componentDidMount() {
    const box = this.ref.get();
    box.style.backgroundColor = "blue";
  }

  // Rendering
  public render(): ReactNode {

    return <Page>
      <div style={{width: 50, height: 50}} ref={this.ref.create} />
      <h1>Flaze Web - Dev Starter</h1>
    </Page>;
  }
}


export default IndexPage;
