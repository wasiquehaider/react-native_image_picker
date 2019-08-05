import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import SingleImage from "./src/SingleImage";
import MultipleImage from "./src/MultipleImage";

export default class App extends Component {
  render() {
    // return <SingleImage />;
    return <MultipleImage />;
  }
}

const styles = StyleSheet.create({});
