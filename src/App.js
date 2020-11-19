import React from 'react';
import {
  CssBaseline,
  Container,
  Box,
  Select,
  MenuItem,
  Typography,
  Grid,
  Link,
  Avatar,
  Button,
} from '@material-ui/core';
import {
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles';

import { get } from './services/fetch';

import './App.css';

const theme = createMuiTheme({

});

class App extends React.Component {

  state = {
    tagList: [],
    navList: [],
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    // const res = await get('/resource.json');
    const res = await get('https://expo-res.sparkpool.com/SparkPoolOfficial/eth123.org/main/resource.json');
    if (res && (res || []).length) {
      try {
        const tagList = this.getTagList(res);
        this.setState({
          navList: res,
          tagList,
        });
      } catch (e) {
      }
    }
  }

  getTagList = (navList) => {
    let back = [];
    navList.forEach((item) => {
      if (item.tags) {
        item.tags.split(',').forEach(tag => {
          if (back.indexOf(tag) < 0) {
            back.push(tag);
          }
        });
      }
    });
    return back;
  }

  renderNavCard = (tag) => {
    const { navList } = this.state;
    let node = [];
    navList.forEach((item, index) => {
      if (item.tags.indexOf(tag) > -1) {
        node.push(
          <Grid item xs={3} key={index}>
            <Link
              color="textPrimary"
              href={item.website}
              underline='none'>
              <Box
                className='cardItem'
                display="flex"
                flexDirection="row"
                p={1}
                borderRadius={8}>
                <Box mr={1}>
                  <Avatar>{item.name.slice(0, 1)}</Avatar>
                </Box>
                <Box>
                  <Box mb={1}>
                    <Typography variant="body1" style={{ fontWeight: 500, color: '#333'}}>
                      {item.name}
                    </Typography>
                  </Box>
                  <Typography variant="caption" style={{ color: '#999', wordBreak: 'break-all' }}>
                    {item.desc || (item.website || '').replace(/htt(p|ps):\/\//, '')}
                  </Typography>
                </Box>
              </Box>
            </Link>
          </Grid>
        )
      }
    });
    return node;
  }

  render() {

    const { tagList } = this.state;

    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container>
          <Box mt={2} display="flex" flexDirection="column" alignItems="flex-end">
            {/* <Select value="zh">
              <MenuItem value="zh">简体中文</MenuItem>
              <MenuItem value="en">English</MenuItem>
            </Select> */}
            <Button>简体中文</Button>
          </Box>
          <Box mb={4} display="flex" flexDirection="column" alignItems="center">
            <Box mb={1}>
              <Typography variant="h4">
                ETH123.org
              </Typography>
            </Box>
            <Typography>
              以太坊生态项目导航
            </Typography>
          </Box>
          <Box display="flex" flexDirection="row">
            <Box mr={2} px={1} className="tagNav" id="tagNav">
              {
                (tagList || []).map((tag, index) => (
                  <Link
                    color="textPrimary"
                    href={`#${tag}`}
                    key={tag}
                    className={ index === 1 ? "tagLink tagLink_active" : 'tagLink'}
                    underline="none"
                  >
                    <Box py={1} px={2}>{tag}</Box>
                  </Link>
                ))
              }
            </Box>
            <Box flex={1}>
              {
                (tagList || []).map((tag) => (
                  <Box
                    bgcolor="white"
                    borderRadius={16}
                    mb={2}
                    key={tag}
                    id={tag}
                    px={3}
                  >
                    <Box
                      py={2}
                      border={1}
                      borderTop={0}
                      borderRight={0}
                      borderLeft={0}
                      borderColor="grey.100"
                    >
                      <Typography>{tag}</Typography>
                    </Box>
                    <Box py={3}>
                      <Grid container spacing={1}>
                        { this.renderNavCard(tag) }
                      </Grid>
                    </Box>
                  </Box>
                ))
              }
            </Box>
          </Box>
          <Box display="flex" flexDirection="column" alignItems="center" mt={2} mb={5}>
            <Box mb={1}>
              <Typography>一起发现更多新产品</Typography>
            </Box>
            <Button variant="contained" color="primary">提交</Button>
          </Box>
        </Container>
      </ThemeProvider>
    );

  }

}

export default App;
