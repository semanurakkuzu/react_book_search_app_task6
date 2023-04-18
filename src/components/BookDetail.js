import React, { useEffect, useState } from 'react'
import {
  Card,
  Stack,
  CardBody,
  Heading,
  Text,
  Container,
  Image,
  Center,
  Box
} from '@chakra-ui/react'
import {  ArrowBackIcon } from '@chakra-ui/icons'
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import axios from 'axios';
function BookDetail() {

    let { bookId } = useParams();
    const [book, setBook] = useState()

useEffect(() => {
    axios(`https://www.googleapis.com/books/v1/volumes/${bookId}`)
    .then((res) => setBook(res.data))
    .catch((e) => console.log(e))
   
});

  return (
    
    <Box
      w="100%"
      h="220px"
      backgroundImage="url('https://images.unsplash.com/photo-1513185041617-8ab03f83d6c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')"
    >
      <Container maxW="4xl">
        <Center h="150px" color="white">
          <Text fontSize="6xl" mt="10">
            Search Detail
          </Text>
        </Center>
        { book &&  
        <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow="hidden"
          variant="outline"
          mt="120"
        >
          <Stack>
            <CardBody>
            <Link mt={4} to="/">
                <ArrowBackIcon />
              </Link>
                <Center><Heading size="lg">{book.volumeInfo.title}</Heading></Center>
                <Center><Text py="2">{book.volumeInfo.authors?.join(', ')}</Text></Center>
              <Center><Image 
                h={200}
                w={140}
                src={
                    book.volumeInfo.imageLinks?.thumbnail ||
                    'https://media.istockphoto.com/id/1132987502/tr/vekt%C3%B6r/vekt%C3%B6r-ger%C3%A7ek%C3%A7i-bo%C5%9F-kitap-kapa%C4%9F%C4%B1-%C3%BCst-g%C3%B6r%C3%BCn%C3%BCm-yal%C4%B1t%C4%B1lm%C4%B1%C5%9F.jpg?s=170667a&w=0&k=20&c=o7q9Yrn1hoZmUPXvf9qssdoljtgz-zfkM2Z7Gz-nCzw='
                  }
                alt={book.volumeInfo.title}
                borderRadius="xs"
              /></Center>
              
              <Text py="2">
              <div dangerouslySetInnerHTML={{ __html: book.volumeInfo.description }} />
              </Text>
              <Text align={'right'} py="2">{book.volumeInfo.publishedDate}</Text>
            </CardBody>
          </Stack>
        </Card>
        }
      </Container>
    </Box> 
  )
}

export default BookDetail
