// React testing powered by Enzyme and Chai

const React = require('react');
const expect = require('chai').expect;
const assert = require('chai').assert;

// Importing React components for testing
// MVP Components (feel free to change names!)

import Dashboard from '../src/Dashboard';
import RouteView from '../src/RouteView';
import ReqView from '../src/ReqView';
import ResView from '../src/ResView';

// Extension Components

// import RouteVisualization from '../src/RouteVisualization';
// import MiddlewareVisualization from '../src/MiddlewareVisualization;

describe('MVP base component unit tests', () => {
  describe('<Dashboard />', () => {
    before(() => {
      wrapper = shallow(<Dashboard />);
    });

    it('Renders a <div> with class "Dashboard"', () => {
      expect(wrapper.type()).to.equal('div');
      expect(wrapper.props().className).to.equal('Dashboard');
    });

    it('Dashboard component contains state', () => {
      expect(wrapper.state()).to.be.true;
    });

    it('Dashboard state contains ReqLogs and ResLogs"', () => {
      expect(wrapper.state('ReqLogs')).to.be.true;
      expect(wrapper.state('ResLogs')).to.be.true;
    });

    it('ReqLogs and ResLogs should be arrays of objects"', () => {
      expect(wrapper.state('ReqLogs')).to.be.instanceof(Array);
      expect(wrapper.state('ResLogs')).to.be.instanceof(Array);
      expect(wrapper.state('ReqLogs'.children())).to.be.instancesof(Object);
      expect(wrapper.state('ResLogs'.children())).to.be.instancesof(Object);
    });

    it('Dashboard component contains RouteView, ReqView, and ResView', () => {
      expect(wrapper.children().length).to.be(3);
    })
  });

  describe('<RouteView />', () => {
    before(() => {
      wrapper = shallow(<RouteView />);
    });

    it('Renders a <div> with class "RouteView"', () => {
      expect(wrapper.type()).to.equal('div');
      expect(wrapper.props().className).to.equal('RouteView');
    })

    it('RouteView element contains child elements displaying Route, Status Code, Type of Request, and Response Time', () => {
      expect(wrapper.children().length).to.be(4);
    })
  });

  describe('<ReqView />', () => {
    before(() => {
      wrapper = shallow(<ReqView />);
    });

    it('Renders a <div> with class "ReqView"', () => {
      expect(wrapper.type()).to.equal('div');
      expect(wrapper.props().className).to.equal('ReqView');
    });

    it('ReqView contains information from request object', () => {
      expect(wrapper.children()).to.be.true;
      expect(wrapper.children()).to.have.text();
    });
  });

  describe('<ResView />', () => {
    before(() => {
      wrapper = shallow(<ResView />);
    });

    it('Renders a <div> with class "ResView"', () => {
      expect(wrapper.type()).to.equal('div');
      expect(wrapper.props().className).to.equal('ResView');
    });

    it('ResView contains information from response object', () => {
      expect(wrapper.children()).to.be.true;
      expect(wrapper.children()).to.have.text();
    });
  });
});

