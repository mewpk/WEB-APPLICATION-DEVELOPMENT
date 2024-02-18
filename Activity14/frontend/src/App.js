import React, { Component } from 'react';

const styles = {
  header: {
    textAlign: 'center',
    color: '#ffc200',
    margin: '0px',
    padding: '20px 0px',
  },
  cards: {
    display: 'flex',
    flexDirection: 'column',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

  },
  card: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '800px',
    backgroundColor: 'antiquewhite',
    padding: '20px',
    borderRadius: '15px',
    border: 'solid 3px',
    marginTop: '0px',
    marginBottom: '0px',
  },
  box: {
    backgroundColor: 'lightgreen',
    color: 'purple',
    margin: '10px',
    padding: '10px',
    borderRadius: '15px',
    border: 'solid 2px',
  },
  left: {
    width: '70%',
  },
  food: {
    fontWeight: 'bold',
  },
  info : {
    paddingRight: '10px',
  },
  buttonVote: {
    height: '35px',
    margin: '10px',
  },
  bottom: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
};

class Button extends Component {
  render() {
    const { name, func } = this.props;
    return (
      <button style={styles.buttonVote} onClick={func}>
        {name}
      </button>
    );
  }
}

class Card extends Component {
  state = {
    count: 0,
    display: 'Min',
  };

  increment = () => {
    let { count } = this.state;
    if (count < 10) {
      this.setState({
        count: ++count,
        display: count === 10 ? 'Max' : String(count),
      });
    } else {
      alert('Cannot Vote more');
    }
  };

  decrement = () => {
    let { count } = this.state;
    if (count > 0) {
      this.setState({
        count: --count,
        display: count === 0 ? 'Min' : String(count),
      });
    } else {
      alert('Cannot unvote');
    }
  };

  render() {
    const { header, food, info, img } = this.props;
    const { display } = this.state;

    return (
      <div style={styles.container}>
        <div style={styles.card}>
          <div style={styles.left}>
            <h2>{header}</h2>
            <p style={styles.food}>{food}</p>
            <p style={styles.info}>{info}</p>
          </div>
          <img src={img} alt="" width="30%" height={200} />
          <div style={styles.bottom}>
            <Button func={this.increment} name="Click to Vote" />
            <h2 style={styles.box}>
              {display}
            </h2>
            <Button func={this.decrement} name="Click to Unvote" />
          </div>
        </div>
      </div>
    );
  }
}

class Main extends Component {


  cardData = [
    {
      header: "อาหารคาว",
      food: "ข้าวผัด",
      info: "ข้าวผัด เป็นอาหารจานเดียวแบบพื้นฐานของเอเชีย เป็นการนำข้าวสวยลงไปผัดคลุกกับซอส หรือน้ำพริก หรือเครื่องปรุงรสต่างๆ เพื่อให้ได้รสชาติ เช่น ซอสมะเขือเทศ, ซอสพริก, ซีอิ๊วดำ หรือซอสถั่วเหลือง และมีการใส่เนื้อสัตว์ชนิดต่างๆ ลงไป เช่น หมู, ไก่, ปลาหมึก, ปู และกุ้ง เป็นต้น โดยเรียกชื่อข้าวผัดชนิดนั้น ๆ ตามชื่อเนื้อสัตว์ที่ใส่ลงไป และอาจใส่ไข่ลงไปผสมด้วย หรืออาจโปะไข่ดาวแต่งหน้าเพิ่มเติม สำหรับผักที่ใช้นิยมใช้ผักคะน้าและโรยหน้าด้วยต้นหอมสับ แต่สำหรับข้าวผัดปูจะไม่ใส่คะน้า",
      img: "https://www.pim.in.th/images/all-one-dish-food/fried-rice-with-crabmeat/fried-rice-with-crabmeat-14.JPG",
    },
    {
      header: "อาหารหวาน",
      food: "บัวลอย",
      info: "บัวลอยเป็นขนมไทยที่ทำจากแป้งข้าวเหนียวนำมาปั้นเป็นเม็ดเล็กกลมๆ หนึบนับและมีหลากสีที่สวยงาม ลงตัวกับน้ำกะทิที่มีกลิ่นหอมของใบเตย มีรสชาติหวานและเค็มอ่อนๆ สามารถเพิ่มเนื้อมะพร้าวอ่อนและไข่หวานได้ วิธีธรรมชาติที่สร้างสีสันและเนื้อสัมผัสให้กับเม็ดบัวลอยก็คือการนำผมไม้ ผัก และดอกไม้มาผสมกับแป้งข้าวเหนียว",
      img: "https://i.ytimg.com/vi/npONGZxWz1s/maxresdefault.jpg",
    },
  ];

  renderCards = () => {
    return this.cardData.map((card, index) => (
      <Card
        key={index}
        header={card.header}
        food={card.food}
        info={card.info}
        img={card.img}
      />
    ));
  };
  
  componentDidMount() {
    document.body.style.backgroundColor = "gray";
    document.body.style.height = "100vh";
    document.body.style.margin = "0px";
    document.body.style.padding = "0px";
  }

  render() {
    return (
      <>
        <h1 style={styles.header}>โหวตอาหาร</h1>
        <div style={styles.cards}>
          {this.renderCards()}
        </div>
      </>
    );
  }
}

export default Main;
