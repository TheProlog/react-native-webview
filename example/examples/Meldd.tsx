import React, {Component} from 'react';
import {Button, Linking, Text, View} from 'react-native';

import WebView from 'react-native-webview';

const HTML = `
<!DOCTYPE html>\n
<html>
  <head>
    <title>Meldd</title>
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=320, user-scalable=no">
    <style type="text/css">
      body {
        margin: 0;
        padding: 0;
        font: 62.5% arial, sans-serif;
        background: #ccc;
        height: 100%;
        position: relative;
      }
      div {
        background: lightskyblue;  
        height: 300px;
             
      }
    </style>
  </head>
  <body>
    <div contenteditable="true">Some text to select</div>
  </body>
</html>
`;

type Props = {};
type State = {};

export default class Meldd extends Component<Props, State> {
  state = {};

  render() {
    return (
      <View>
        <View style={{ height: 120 }}>
          <WebView
            autoShowKeyboard={false}
            hideSelectionContextMenu={true}
            source={{html: HTML}}
            automaticallyAdjustContentInsets={false}
          />
        </View>
      </View>
    );
  }
}
