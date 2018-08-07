/* eslint-disable */

let selectorProps = {
    channels: this.channels,
    onSelect: (channel) => {
        channel.count++;
        viewer.update(channel);
    }
};

let selector = new ChannelSelector(selectorProps);

// vs:

let selector2 = new ChannelSelector({
    channels: this.channels,
    onSelect: (channel) => {
        channel.count++;
        viewer.update(channel);
    }
});