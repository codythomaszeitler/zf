#!/bin/sh

vsce package
code --uninstall-extension undefined_publisher.sf-zsi
code --install-extension sf-zsi-0.0.1.vsix